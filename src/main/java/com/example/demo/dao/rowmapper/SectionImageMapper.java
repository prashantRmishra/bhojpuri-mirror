package com.example.demo.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.demo.model.HomeTilePageModel;

import org.springframework.jdbc.core.RowMapper;

public class SectionImageMapper implements RowMapper<HomeTilePageModel> {

    @Override
    public HomeTilePageModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        HomeTilePageModel model = new HomeTilePageModel();
        model.setNewsDescription(rs.getString("newsdescription"));
        model.setSection(rs.getString("section"));
        model.setId(Integer.toString(rs.getInt("id")));
        model.setDate(rs.getDate("date"));
        model.setTitle(rs.getString("title"));
        model.setShortDescription(rs.getString("short_description"));

        return model;

    }

}
