package com.example.demo.dao.login.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.demo.model.UserBean;

import org.springframework.jdbc.core.RowMapper;

public class UserMapper implements RowMapper<UserBean> {

    @Override
    public UserBean mapRow(ResultSet rs, int rowNum) throws SQLException {
       UserBean u  = new UserBean();
       u.setEmailId(rs.getString("email"));
       u.setPassword(rs.getString("password"));
        return u;
    }
    
}
