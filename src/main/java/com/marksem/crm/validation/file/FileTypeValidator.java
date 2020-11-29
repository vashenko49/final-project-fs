package com.marksem.crm.validation.file;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.google.inject.internal.util.Lists;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Objects;


@Component
public class FileTypeValidator implements ConstraintValidator<FileType, MultipartFile> {
    private ArrayList<String> fileTypes;

    @Override
    public void initialize(FileType constraintAnnotation) {
        fileTypes = Lists.newArrayList(constraintAnnotation.value());
    }

    @Override
    public boolean isValid(MultipartFile value, ConstraintValidatorContext context) {
        if (value != null) {
            return fileTypes.stream()
                    .anyMatch(type -> type.toLowerCase().equals(Objects.requireNonNull(value.getContentType()).toLowerCase()));
        }

        return true;
    }
}