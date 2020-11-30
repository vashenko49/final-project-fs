package com.marksem.crm.exceptions.user;

public class UserExistException extends RuntimeException {

    public UserExistException() {
        super("email is already exist");
    }
}