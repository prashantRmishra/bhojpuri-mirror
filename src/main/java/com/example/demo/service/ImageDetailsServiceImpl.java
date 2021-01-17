package com.example.demo.service;

import java.util.List;

import com.example.demo.dao.HomeTilePageDao;
import com.example.demo.model.HomeTilePageModel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageDetailsServiceImpl implements ImageDetailsService {

    @Autowired
    HomeTilePageDao homeTilepageDao;

    @Override
    public boolean ImageDetails(HomeTilePageModel data) {

        return homeTilepageDao.saveImageDetails(data);
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

    @Override
    public List<HomeTilePageModel> getAllImagesForSection(String section) {

        return this.homeTilepageDao.getAllImagesForSection(section);
    }

    @Override
    public boolean deleteImage(String id) {

        return this.homeTilepageDao.deleteImage(id);
    }

}
