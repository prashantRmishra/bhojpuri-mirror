package com.example.demo.controller.login;

import java.util.ArrayList;

import com.example.demo.model.JwtResponse;
import com.example.demo.model.UserBean;
import com.example.demo.service.login.LoginService;
import com.example.demo.utility.jwt.JwtUtil;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    
    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    BCryptPasswordEncoder bcyptPasswordEncoder;
    @Autowired
    LoginService loginService;
    Logger logger   = LogManager.getLogger(LoginController.class);
    @CrossOrigin(origins =  {"http://localhost:4200","https://bhojpuri-mirror.herokuapp.com"})
    @PostMapping("/login")
    public ResponseEntity<Object> checkEmail(@RequestBody UserBean data) throws Exception{
      UserBean userBean = this.loginService.emailExist(data); 
      if(userBean!=null  
       && bcyptPasswordEncoder.matches(data.getPassword(), userBean.getPassword())){
          
          
           authenticate(data.getEmailId(), data.getPassword());
        final UserDetails userDetails = new org.springframework.security.core.userdetails.User(userBean.getEmailId(), 
        userBean.getPassword(), new ArrayList<>());
        final String token   =  jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
       }
       return ResponseEntity.ok("Unauthorized");
        
    }
    private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
