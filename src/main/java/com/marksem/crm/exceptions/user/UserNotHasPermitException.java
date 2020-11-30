package com.marksem.crm.exceptions.user;

public class UserNotHasPermitException extends RuntimeException {

    public UserNotHasPermitException(String msg) {
        super(msg);
    }
    public UserNotHasPermitException() {
        super("no authority");
    }
}