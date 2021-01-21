package com.example.demo.controller.login;

import com.example.demo.model.User;
import com.example.demo.service.login.LoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    
    @Autowired
    LoginService loginService;
    @PostMapping("/login")
    public boolean checkEmail(@RequestBody User data){
        return this.loginService.emailExist(data);
    }
}
