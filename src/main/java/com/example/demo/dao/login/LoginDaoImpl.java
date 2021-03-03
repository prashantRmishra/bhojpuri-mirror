package com.example.demo.dao.login;

import java.util.List;

import com.example.demo.dao.login.rowmapper.UserMapper;
import com.example.demo.model.UserBean;
import com.example.demo.utility.PropertyFileReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class LoginDaoImpl implements LoginDao {

    public static PropertyFileReader propertyFileReader = new PropertyFileReader(
            "demo/src/main/java/com/example/demo/queries/login.json");

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public UserBean emailExist(UserBean data) {
        List<UserBean> user = null;
        try {
            user = this.jdbcTemplate.query("select * from users where email=?;",
                    new Object[] { data.getEmailId()}, new UserMapper());
        } catch (Exception e) {
            user = null;
        }
        return !user.isEmpty() ? user.get(0):null;
    }

    @Override
    public boolean logUser(UserBean data) {

        return false;
    }

    @Override
    public UserBean getUser(String email) {
        List<UserBean> user = null;
        try {
            user = this.jdbcTemplate.query("select * from users where email=?;",
                    new Object[] {email}, new UserMapper());
        } catch (Exception e) {
            user = null;
        }
       
        return user.get(0);
    }

}
