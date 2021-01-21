package com.example.demo.utility;

import java.io.File;
import java.io.FileReader;
import java.util.Map;
import java.util.Properties;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class PropertyFileReader {

    private String filename;

    public String getFilename() {
        return this.filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
        this.PropertyBuilder();
    }

    private Map<String, String> queries;

    private FileReader reader;
    private Properties properties;

    public PropertyFileReader(String filename) {
        this.filename = filename;
        this.PropertyBuilder();
    }

    public PropertyFileReader() {
    }

    public void PropertyBuilder() {
        File propertyFile = new File(this.filename);
        try {
            if (propertyFile != null && propertyFile.exists()) {
                this.reader = new FileReader(propertyFile);
                String extension = propertyFile.getName().substring(propertyFile.getName().lastIndexOf(".") + 1);
                if (extension.equalsIgnoreCase("properties")) {
                    this.properties.load(reader);
                } else if (extension.equalsIgnoreCase("json")) {
                    this.queries = new ObjectMapper().readValue(reader, new TypeReference<Map<String, String>>() {

                    });
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null)
                    reader.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

    public String getValue(String key) {
        String value = null;
        if (this.properties != null && !this.properties.isEmpty())
            value = this.properties.getProperty(key);
        return value;

    }

    public String getQuery(String key) {
        String query = null;
        if (this.queries != null && !this.queries.isEmpty())
            query = this.queries.get(key);
        return query;
    }
}
