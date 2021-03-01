package com.example.demo.dao;

import java.util.Date;
import java.util.List;

import com.example.demo.dao.rowmapper.ImageMapper;
import com.example.demo.dao.rowmapper.SectionImageMapper;
import com.example.demo.model.HomeTilePageModel;
import com.example.demo.utility.DateManupulator;
import com.example.demo.utility.PropertyFileReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class HomeTilePageDaoImpl implements HomeTilePageDao {

    public static PropertyFileReader propertyFileReader = new PropertyFileReader(
        "demo/src/main/java/com/example/demo/queries/cards.json");

    DateManupulator dateUtil = new DateManupulator();    

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public boolean saveImageDetails(HomeTilePageModel data) {
        int result = 0;
        try {
            result += this.jdbcTemplate.update("insert into imageDetails(filename,filetype,filedata,newsdescription,section,date,title,short_description) values(?,?,?,?,?,?,?,?)",
                    new Object[] { data.getFilename(), data.getFiletype(), data.getData() ,data.getNewsDescription(),data.getSection(),
                    new Date(),data.getTitle(),data.getShortDescription()});
        } catch (Exception e) {
            result = 0;
        }
        return result > 0 ? true : false;
    }

    @Override
    public List<HomeTilePageModel> get4ImageDetails() {
        List<HomeTilePageModel> list = null;
        list = jdbcTemplate.query("select * from imageDetails where date=? limit ?;", new Object[]{new Date(),4}, new ImageMapper());
        return list.isEmpty() ? null : list;
    }

    @Override
    public List<HomeTilePageModel> getAllImageDetails() {
        List<HomeTilePageModel> list = null;
        list = jdbcTemplate.query("select * from imageDetails where date=? and date=?;",new Object[]{new Date(),dateUtil.createYesterdaysDate()}, new ImageMapper());
        return list.isEmpty() ? null : list;
    }

    @Override
    public HomeTilePageModel getImageById(String imgid) {
        List<HomeTilePageModel> list = null;
        try {
            list = jdbcTemplate.query("select * from imageDetails where id = ?;", new Object[] {Integer.parseInt(imgid)}, new ImageMapper());
        } catch (Exception e) {
            e.printStackTrace();
            list = null;
        }
        return list.isEmpty() ? null : list.get(0);
    }

    @Override
    public List<HomeTilePageModel> getAllImagesForSection(String section) {
        List<HomeTilePageModel> list = null;
        list = jdbcTemplate.query("select * from imageDetails where section = ? and date in(?,?);",new Object[]{section,new Date(),dateUtil.createYesterdaysDate()}, new SectionImageMapper());
        return list.isEmpty() ? null : list;
    }

    @Override
    public boolean deleteImage(String imgid) {
        int result=0;
        try {
            result = jdbcTemplate.update("delete from imageDetails where id = ?", new Object[]{Integer.parseInt(imgid)});
        } catch (Exception e) {
            e.printStackTrace();
            result=0;
        }
        return result > 0 ? true:false;
    }

}
