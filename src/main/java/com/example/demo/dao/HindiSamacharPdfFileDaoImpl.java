package com.example.demo.dao;

import java.util.Collections;
import java.util.List;

import com.example.demo.dao.rowmapper.FileDetailsOfSamacharMapper;
import com.example.demo.dao.rowmapper.HindiSamacharPdfFileMapper;
import com.example.demo.model.HindiSamacharPdfFileModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class HindiSamacharPdfFileDaoImpl implements HindiSamacharPdfFileDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public boolean saveHindiSamacharPdfFile(HindiSamacharPdfFileModel data) {
        int res = 0;
        try {

            res += jdbcTemplate.update("insert into hindisamacharpdf(filename,filetype,filedata,date) values(?,?,?,?)",
                    new Object[] { data.getFilename(), data.getFileType(), data.getFileData(), data.getDate() });

        } catch (Exception e) {
            res = 0;
            e.printStackTrace();
        }
        return res > 0 ? true : false;
    }

    @Override
    public HindiSamacharPdfFileModel getHindiSamacharPdfFile(String fileId) {
        List<HindiSamacharPdfFileModel> hSPFModelList;
        try {
            hSPFModelList = jdbcTemplate.query("select * from hindisamacharpdf where id=" + Integer.parseInt(fileId),
                    new HindiSamacharPdfFileMapper());
        } catch (Exception e) {
            hSPFModelList = null;
            e.printStackTrace();
        }
        return hSPFModelList.isEmpty() ? null : hSPFModelList.get(0);
    }

    @Override
    public List<HindiSamacharPdfFileModel> getFileDetails() {
        List<HindiSamacharPdfFileModel> fileDataList = null;
        try {
            fileDataList = jdbcTemplate.query("select id,date,filename from hindisamacharpdf;",
                    new FileDetailsOfSamacharMapper());
        } catch (Exception e) {
            fileDataList = null;
        }
        if (!fileDataList.isEmpty()) {
            Collections.reverse(fileDataList);
        }
        return fileDataList.isEmpty() ? null : fileDataList;
    }

    @Override
    public boolean deleteFIleDtails(String fileId) {
        int result = 0;
        try {
            result += jdbcTemplate.update("delete from hindisamacharpdf where id=?;",
                    new Object[] { Integer.parseInt(fileId) });
        } catch (Exception e) {
            e.printStackTrace();
            result = 0;
        }
        return result > 0 ? true : false;
    }

}
