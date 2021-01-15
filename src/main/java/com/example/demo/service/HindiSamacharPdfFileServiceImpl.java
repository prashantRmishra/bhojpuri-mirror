package com.example.demo.service;
import java.sql.Date;
import java.util.List;

import com.example.demo.dao.HindiSamacharPdfFileDao;
import com.example.demo.model.HindiSamacharPdfFileModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class HindiSamacharPdfFileServiceImpl implements HindiSamacharPdfService {

    @Autowired
    HindiSamacharPdfFileDao pdfFileDao;
    HindiSamacharPdfFileModel pdfFileModel;

    @Override
    public boolean saveHindiSamacharPdfFile(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        long epoch = System.currentTimeMillis();
        Date date = new Date(epoch);

        try {
            if (fileName.contains("..")) {
                throw new Exception();
            }
            pdfFileModel = new HindiSamacharPdfFileModel(fileName, file.getContentType(), file.getBytes());
        } catch (Exception e) {
            e.printStackTrace();
        }
        pdfFileModel.setDate(date);
        return this.pdfFileDao.saveHindiSamacharPdfFile(pdfFileModel);
    }

    @Override
    public HindiSamacharPdfFileModel getHindiSamacharPdfFile(String fileId) {

        return this.pdfFileDao.getHindiSamacharPdfFile(fileId);
    }

    @Override
    public List<HindiSamacharPdfFileModel> getFileDetails() {
        
        return this.pdfFileDao.getFileDetails();
    }

    @Override
    public boolean deleteFIleDtails(String fileId) {
        
        return this.pdfFileDao.deleteFIleDtails(fileId);
    }

}
