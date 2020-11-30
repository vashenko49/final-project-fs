package com.marksem.crm.advice;

import com.marksem.crm.exceptions.CustomErrorResponse;
import com.marksem.crm.exceptions.auth.JwtAuthenticationException;
import com.marksem.crm.exceptions.user.UserExistException;
import com.marksem.crm.exceptions.user.UserNotHasPermitException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@ControllerAdvice
public class GlobalControllerAdvice extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleBindException(BindException ex, HttpHeaders headers, HttpStatus status,
                                                         WebRequest request) {
        log.error(ex.getMessage(), ex);
        BindingResult errors = ex.getBindingResult();
        String msg = "Failed. " + errors.getErrorCount() + " error(s)";
        List<String> allErrors = errors.getAllErrors()
                .stream()
                .filter(FieldError.class::isInstance)
                .map(FieldError.class::cast)
                .map(i -> i.getField() + ' ' + i.getDefaultMessage())
                .collect(Collectors.toList());
        return new ResponseEntity<>(new CustomErrorResponse(msg, allErrors), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<Object> accessDeniedException(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage()), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(JwtAuthenticationException.class)
    public ResponseEntity<Object> jwtAuthenticationException(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage()), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> badCredentialsException(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse("Bad credentials"), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(InsufficientAuthenticationException.class)
    public ResponseEntity<Object> insufficientAuthenticationException(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage()), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(UserExistException.class)
    public ResponseEntity<Object> userExistException(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserNotHasPermitException.class)
    public ResponseEntity<Object> userNotHasPermitException(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> exception(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage().length() > 0 ? ex.getMessage():  "Something Went Wrong"), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}