package com.example.demo.controller;

import com.example.demo.model.FeedbackModel;
import com.example.demo.service.FeedbackService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    FeedbackService feedback;
   

    @GetMapping("/")
    public String homePage(){
        return "Welcome to bhojpuri mirror home page !!!";
    }
    @PostMapping("/feedback")
    public String homeMethod(@RequestBody FeedbackModel data){

        String result="";
        try {
            result+=feedback.insertFeedback(data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result.equals("") ? "failure !":result;
    }

}
