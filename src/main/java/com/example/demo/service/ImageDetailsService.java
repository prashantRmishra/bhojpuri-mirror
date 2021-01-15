package com.example.demo.service;

import java.util.List;

import com.example.demo.model.HomeTilePageModel;

import org.springframework.web.multipart.MultipartFile;

public interface ImageDetailsService {
    public boolean ImageDetails(MultipartFile file);

    public List<HomeTilePageModel> getAllImageDetails();

    public List<HomeTilePageModel> get4ImageDetails();

    public HomeTilePageModel getImageById(String imgid);
    public List<HomeTilePageModel> getAllImagesForSection(String section);
}
