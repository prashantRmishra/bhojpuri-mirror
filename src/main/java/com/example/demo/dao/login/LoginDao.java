package com.example.demo.dao.login;

import com.example.demo.model.User;

public interface LoginDao {
    
    public boolean emailExist(User data);
    public boolean logUser(User data);
}
