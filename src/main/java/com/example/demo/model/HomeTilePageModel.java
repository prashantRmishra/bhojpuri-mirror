package com.example.demo.model;

import java.io.File;
import java.util.Date;

public class HomeTilePageModel {
    private String id;
    private String filename;
    private String filetype;
    private byte[] data;
    private String newsDescription;
    private String section;
    private String title;
    private Date date;
    private String shortDescription;
    private File file;

    public File getFile() {
        return this.file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public String getShortDescription() {
        return this.shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSection() {
        return this.section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getNewsDescription() {
        return this.newsDescription;
    }

    public void setNewsDescription(String newsDescription) {
        this.newsDescription = newsDescription;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFilename() {
        return this.filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFiletype() {
        return this.filetype;
    }

    public void setFiletype(String filetype) {
        this.filetype = filetype;
    }

    public byte[] getData() {
        return this.data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

}
