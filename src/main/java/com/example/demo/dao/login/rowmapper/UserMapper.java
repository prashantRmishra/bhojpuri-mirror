package com.example.demo.dao.login.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.demo.model.User;

import org.springframework.jdbc.core.RowMapper;

public class UserMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
       User u  = new User();
       u.setEmailId(rs.getString("email"));
       u.setPassword(rs.getString("password"));
        return u;
    }
    
}
