package com.example.demo.service;

import java.util.List;

import com.example.demo.model.HomeTilePageModel;
public interface ImageDetailsService {
    public boolean ImageDetails(HomeTilePageModel data);

    public List<HomeTilePageModel> getAllImageDetails();

    public List<HomeTilePageModel> get4ImageDetails();

    public HomeTilePageModel getImageById(String imgid);
    public List<HomeTilePageModel> getAllImagesForSection(String section);
    public boolean deleteImage(String id);
}
