package com.example.demo.dao.login;

import java.util.List;

import com.example.demo.dao.login.rowmapper.UserMapper;
import com.example.demo.model.User;
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
    public boolean emailExist(User data) {
        List<User> user = null;
        try {
            user = this.jdbcTemplate.query("select * from users where email=? and password=?;",
                    new Object[] { data.getEmailId(), data.getPassword() }, new UserMapper());
        } catch (Exception e) {
            user = null;
        }
        return !user.isEmpty();
    }

    @Override
    public boolean logUser(User data) {

        return false;
    }

}
