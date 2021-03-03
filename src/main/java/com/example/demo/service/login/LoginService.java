package com.example.demo.service.login;

import com.example.demo.model.UserBean;

public interface LoginService {
    public UserBean emailExist(UserBean data);

    public UserBean getUser(String email);

    public boolean logUser(UserBean data);
}
