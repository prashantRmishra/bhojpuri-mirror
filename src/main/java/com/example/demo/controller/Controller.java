package com.example.demo.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.model.FeedbackModel;
import com.example.demo.model.HindiSamacharPdfFileModel;
import com.example.demo.model.HomeTilePageModel;
import com.example.demo.service.FeedbackService;
import com.example.demo.service.HindiSamacharPdfService;
import com.example.demo.service.ImageDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = { "Authorization", "newsinfo" })
public class Controller {

    @Autowired
    FeedbackService feedback;

    @Autowired
    HindiSamacharPdfService hSPService;

    @Autowired
    ImageDetailsService imageDetailsServie;

    @GetMapping("/")
    public String homePage() {
        return "Welcome to bhojpuri mirror home page !!!";
    }

    @PostMapping("/feedback")
    public String saveFeedback(@RequestBody FeedbackModel data) {

        String result = "";
        try {
            result += feedback.insertFeedback(data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result.equals("") ? "failure !" : result;
    }

    @PostMapping("/hindisamacharpdf")
    public String saveHindiSamacharPDF(@RequestParam("hindiSamacharPdfFile") MultipartFile file) {
        boolean result = this.hSPService.saveHindiSamacharPdfFile(file);
        return result ? "File successfully Saved " : "Failed to Save " + file.getName();
    }

    @GetMapping("/getfile/{fileId}")
    public ResponseEntity<ByteArrayResource> getHindiSamacharPdf(@PathVariable String fileId) {
        HindiSamacharPdfFileModel hSPFIleModel = this.hSPService.getHindiSamacharPdfFile(fileId);
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(hSPFIleModel.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachmnent; filename=\"" + hSPFIleModel.getFilename() + "\"")
                .body(new ByteArrayResource(hSPFIleModel.getFileData()));
    }

    @GetMapping("/getfiledetails")
    public ResponseEntity<List<HindiSamacharPdfFileModel>> getFileDetails() {
        List<HindiSamacharPdfFileModel> lFileModels = null;
        lFileModels = this.hSPService.getFileDetails();
        return ResponseEntity.ok().body(lFileModels);
    }

    @DeleteMapping("/deletefiledetails/{fileid}")
    public boolean deletefileDetails(@PathVariable String fileid) {

        return this.hSPService.deleteFIleDtails(fileid);
    }

    @PostMapping("/saveimage")
    public boolean saveFile(@RequestParam("image") MultipartFile file, HttpServletRequest req) {
        HomeTilePageModel data = new HomeTilePageModel();
        try {

            data.setNewsDescription(req.getHeader("newsDescription"));
            data.setShortDescription(req.getHeader("shortDescription"));
            data.setSection(req.getHeader("section"));
            data.setTitle(req.getHeader("title"));
            data.setFilename(StringUtils.cleanPath(file.getOriginalFilename()));
            data.setFiletype(file.getContentType());
            data.setData(file.getBytes());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return this.imageDetailsServie.ImageDetails(data);
    }

    @GetMapping("/getallimagefiles")
    public List<HomeTilePageModel> getAllImageDetails() {
        return this.imageDetailsServie.getAllImageDetails();
    }

    @GetMapping("/getimage/{imgid}")
    public ResponseEntity<ByteArrayResource> getImageById(@PathVariable String imgid) {
        HomeTilePageModel model = new HomeTilePageModel();
        model = this.imageDetailsServie.getImageById(imgid);
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(model.getFiletype()))
                .body(new ByteArrayResource(model.getData()));

    }

    @GetMapping("/getimagedescription/{imgid}")
    public ResponseEntity<HomeTilePageModel> getImageDescriptionById(@PathVariable String imgid) {
        HomeTilePageModel model = new HomeTilePageModel();
        model = this.imageDetailsServie.getImageById(imgid);
        return ResponseEntity.ok().body(model);

    }

    /* section tab APIs */

    /*
     * this method fetches all the images for the given section
     * 
     * @param section
     * 
     * @return List of HomeTilePageModel
     */
    @GetMapping("/sectionimage/{section}")
    public List<HomeTilePageModel> getAllsectionImages(@PathVariable String section) {
        return this.imageDetailsServie.getAllImagesForSection(section);
    }

    @DeleteMapping("/deleteimage/{imgid}")
    public boolean deleteImageFIle(@PathVariable String imgid) {
        return this.imageDetailsServie.deleteImage(imgid);
    }

}
