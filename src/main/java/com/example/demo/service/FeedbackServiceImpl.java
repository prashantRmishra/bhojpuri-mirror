package com.example.demo.service;

import com.example.demo.dao.FeedbackDAO;
import com.example.demo.model.FeedbackModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FeedbackServiceImpl implements FeedbackService {



    @Autowired
    FeedbackDAO feedbackDao;
    @Override
    public String insertFeedback(FeedbackModel data) {
        
        return feedbackDao.insertFeedback(data);
    }
    
}
