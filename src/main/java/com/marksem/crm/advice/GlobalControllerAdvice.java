package com.marksem.crm.advice;

import com.marksem.crm.exceptions.CustomErrorResponse;
import com.marksem.crm.exceptions.auth.JwtAuthenticationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

//    @ExceptionHandler(BindException.class)
//    public ResponseEntity<Object> bindException(BindException ex) {
//        log.error(ex.getMessage(), ex);
//        BindingResult errors = ex.getBindingResult();
//        String msg = "Validation failed. " + errors.getErrorCount() + " error(s)";
//        List<String> allErrors = errors.getAllErrors()
//                .stream()
//                .map(DefaultMessageSourceResolvable::getDefaultMessage)
//                .collect(Collectors.toList());
//        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage(), allErrors), HttpStatus.BAD_REQUEST);
//    }


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

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> exception(Exception ex) {
        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(new CustomErrorResponse("Something Went Wrong"), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}