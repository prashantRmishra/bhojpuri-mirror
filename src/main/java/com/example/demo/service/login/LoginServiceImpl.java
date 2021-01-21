package com.example.demo.service.login;

import com.example.demo.dao.login.LoginDao;
import com.example.demo.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoginServiceImpl implements LoginService {


    @Autowired
    LoginDao loginDao;

    @Override
    public boolean emailExist(User data) {
        
        return this.loginDao.emailExist(data);
    }

    @Override
    public boolean logUser(User data) {
        return false;
    }
    
}
