package com.example.demo.utility;


import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateManupulator {

    public Date createYesterdaysDate(int number){
        Date today = new Date();
        Calendar yesterday = Calendar.getInstance();
        yesterday.add(Calendar.DATE, number);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            String dateString = format.format(yesterday.getTime());
            today = format.parse(dateString);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return today;
        
    }
}
