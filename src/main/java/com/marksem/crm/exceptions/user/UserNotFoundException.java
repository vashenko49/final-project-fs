package com.marksem.crm.exceptions.user;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String msg) {
        super(msg);
    }
    public UserNotFoundException() {
        super("user not found");
    }
}