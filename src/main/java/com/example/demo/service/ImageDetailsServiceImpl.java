package com.example.demo.service;

import java.util.List;

import com.example.demo.dao.HomeTilePageDao;
import com.example.demo.model.HomeTilePageModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageDetailsServiceImpl implements ImageDetailsService {

    @Autowired
    HomeTilePageDao homeTilepageDao;

    @Override
    public boolean ImageDetails(MultipartFile file) {
        String filename;
        HomeTilePageModel model = new HomeTilePageModel();
        try {

            filename = StringUtils.cleanPath(file.getOriginalFilename());
            if (filename.contains("..")) {
                throw new Exception();
            }
            model.setFilename(filename);
            model.setFiletype(file.getContentType());
            model.setData(file.getBytes());
        } catch (Exception e) {
            e.printStackTrace();
            model = null;
        }

        return homeTilepageDao.saveImageDetails(model);
    }

    @Override
    public List<HomeTilePageModel> getAllImageDetails() {

        return homeTilepageDao.getAllImageDetails();
    }

    @Override
    public List<HomeTilePageModel> get4ImageDetails() {

        return homeTilepageDao.get4ImageDetails();
    }

    @Override
    public HomeTilePageModel getImageById(String imgid) {
        
        return this.homeTilepageDao.getImageById(imgid);
    }

}
