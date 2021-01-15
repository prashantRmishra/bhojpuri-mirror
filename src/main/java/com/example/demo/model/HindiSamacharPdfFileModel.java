package com.example.demo.model;

import java.sql.Date;

public class HindiSamacharPdfFileModel {
    private String id;
    private String filename;
    private String fileType;
    private byte[] fileData;
    private Date date;

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
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

    public String getFileType() {
        return this.fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getFileData() {
        return this.fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }

    public HindiSamacharPdfFileModel(String fileName, String fileType, byte[] data) {
        this.filename = fileName;
        this.fileType = fileType;
        this.fileData = data;

    }

    public HindiSamacharPdfFileModel() {

    }
}
