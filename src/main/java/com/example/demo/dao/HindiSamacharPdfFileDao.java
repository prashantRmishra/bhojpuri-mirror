package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.HindiSamacharPdfFileModel;

public interface HindiSamacharPdfFileDao {
    public boolean saveHindiSamacharPdfFile(HindiSamacharPdfFileModel data);

    public HindiSamacharPdfFileModel getHindiSamacharPdfFile(String fileId);
    public List<HindiSamacharPdfFileModel> getFileDetails();
    public boolean deleteFIleDtails(String fileId);
    
}
