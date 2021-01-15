package com.example.demo.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.demo.model.HomeTilePageModel;

import org.springframework.jdbc.core.RowMapper;

public class ImageMapper implements RowMapper<HomeTilePageModel> {

    @Override
    public HomeTilePageModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        HomeTilePageModel model = new HomeTilePageModel();
        model.setFilename(rs.getString("filename"));
        model.setFiletype(rs.getString("filetype"));
        model.setData(rs.getBytes("filedata"));
        model.setNewsDescription(rs.getString("newsdescription"));
        model.setSection(rs.getString("section"));
        model.setId(Integer.toString(rs.getInt("id")));
        
        return model;
    }
    
}
