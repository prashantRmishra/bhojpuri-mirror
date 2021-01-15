package com.example.demo.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.demo.model.HindiSamacharPdfFileModel;

import org.springframework.jdbc.core.RowMapper;

public class FileDetailsOfSamacharMapper implements RowMapper<HindiSamacharPdfFileModel> {

    @Override
    public HindiSamacharPdfFileModel mapRow(ResultSet rs, int rowNum) throws SQLException {

        HindiSamacharPdfFileModel hSPFModel = new HindiSamacharPdfFileModel();
        hSPFModel.setFilename(rs.getString("filename"));
        hSPFModel.setId(Integer.toString(rs.getInt("id")));
        hSPFModel.setDate(rs.getDate("date"));
        return hSPFModel;
    }

}
