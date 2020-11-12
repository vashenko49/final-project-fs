package com.marksem.crm.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api0/login")
public class LoginController {
    @GetMapping
    public Integer LoginTest(){
        System.out.println("login");
        return 1;
    }

    @PostMapping
    public Integer Login(){
        return 1;
    }
}
