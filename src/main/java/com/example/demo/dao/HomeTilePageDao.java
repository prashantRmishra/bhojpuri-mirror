package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.HomeTilePageModel;

public interface HomeTilePageDao {
    public boolean saveImageDetails(HomeTilePageModel data);

    public List<HomeTilePageModel> get4ImageDetails();

    public List<HomeTilePageModel> getAllImageDetails();

    public HomeTilePageModel getImageById(String imgid);

    public List<HomeTilePageModel> getAllImagesForSection(String section);

}
