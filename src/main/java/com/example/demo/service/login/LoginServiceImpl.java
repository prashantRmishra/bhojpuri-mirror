package com.example.demo.service.login;

import java.util.ArrayList;

import com.example.demo.dao.login.LoginDao;
import com.example.demo.model.UserBean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService ,UserDetailsService{

    @Autowired
    LoginDao loginDao;

    @Override
    public UserBean emailExist(UserBean data) {

        return this.loginDao.emailExist(data);
    }

    @Override
    public boolean logUser(UserBean data) {
        return false;
    }

    @Override
    public UserBean getUser(String email) throws UsernameNotFoundException{
        UserBean userBean = this.loginDao.getUser(email);
        if(userBean==null) throw new UsernameNotFoundException("User with emailId "+email+" does not exist");
        else return userBean;
    }

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserBean userBean = this.loginDao.getUser(email);
        if(userBean!=null){
            return new User(userBean.getEmailId(),userBean.getPassword(),new ArrayList<>());
        }
		else {
            throw new UsernameNotFoundException("User with emailId "+email+" does not exist");
        }
	}

}
