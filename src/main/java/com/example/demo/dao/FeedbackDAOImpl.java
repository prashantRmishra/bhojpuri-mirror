package com.example.demo.dao;

import com.example.demo.model.FeedbackModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class FeedbackDAOImpl implements FeedbackDAO {

    // @Autowired
    // JdbcTemplate jdbcTemplate;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public String insertFeedback(FeedbackModel data) {
        int result = 0;
        try {
            result += jdbcTemplate.update("insert into feedback values(?,?,?,?)", new Object[] { data.getName(),
                    data.getEmail() ,data.getComment(),data.getPhnone_number()});
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result > 0 ? "Success" : "locha ho gya";
    }

}
