package com.example.demo.service;

import java.util.List;

import com.example.demo.model.HindiSamacharPdfFileModel;

import org.springframework.web.multipart.MultipartFile;

public interface HindiSamacharPdfService {
    public boolean saveHindiSamacharPdfFile(MultipartFile file);
    public HindiSamacharPdfFileModel getHindiSamacharPdfFile(String fileId);
    public List<HindiSamacharPdfFileModel> getFileDetails();
    public boolean deleteFIleDtails(String fileId);
}
