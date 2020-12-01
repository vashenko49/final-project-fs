package com.marksem.crm.service;

import com.marksem.crm.entity.Mail;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    private final Configuration templateConfiguration;

    public static int noOfQuickServiceThreads = 20;

    private final ScheduledExecutorService quickService;

    @Value("${spring.mail.username}")
    private String mailFrom;

    @Value("${app.mail.templatePath}")
    private String emailTemplatePath;


    @Autowired
    public MailService(JavaMailSender mailSender, Configuration templateConfiguration) {
        this.mailSender = mailSender;
        this.templateConfiguration = templateConfiguration;
        this.quickService = Executors.newScheduledThreadPool(noOfQuickServiceThreads);
    }

    public void sendEmailAccountDetails(String login, String password, String to)
            throws IOException, TemplateException, MessagingException {
        Mail mail = new Mail();
        mail.setSubject("Your account details for marksem crm");
        mail.setTo(to);
        mail.getModel().put("login", login);
        mail.getModel().put("password", password);

        templateConfiguration.setClassForTemplateLoading(getClass(), emailTemplatePath);
        Template template = templateConfiguration.getTemplate("email-account-details.ftl");
        String mailContent = FreeMarkerTemplateUtils.processTemplateIntoString(template, mail.getModel());
        mail.setContent(mailContent);
        send(mail);
    }

    @Async
    public void send(Mail mail) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());

        helper.setTo(mail.getTo());
        helper.setText(mail.getContent(), true);
        helper.setSubject(mail.getSubject());
        helper.setFrom(mailFrom);

        quickService.submit(() -> mailSender.send(message));
    }
}