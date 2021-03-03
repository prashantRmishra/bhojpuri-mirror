package com.example.demo.dao.login;

import com.example.demo.model.UserBean;

public interface LoginDao {
    
    public UserBean emailExist(UserBean data);
    public UserBean getUser(String email);
    public boolean logUser(UserBean data);
}
