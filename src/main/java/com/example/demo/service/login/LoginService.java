package com.example.demo.service.login;

import com.example.demo.model.User;

public interface LoginService {
    public boolean emailExist(User data);
    public boolean logUser(User data);
}
