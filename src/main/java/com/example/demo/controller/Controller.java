package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

import com.example.demo.model.FeedbackModel;
import com.example.demo.model.HindiSamacharPdfFileModel;
import com.example.demo.model.HomeTilePageModel;
import com.example.demo.service.FeedbackService;
import com.example.demo.service.HindiSamacharPdfService;
import com.example.demo.service.ImageDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.function.ServerRequest.Headers;

@RestController
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
    public boolean saveFile(@RequestParam("image") MultipartFile file) {

        return this.imageDetailsServie.ImageDetails(file);
    }

    @GetMapping("/get4imagefiles")
    public List<HomeTilePageModel> get4ImageDetails() {
        this.imageDetailsServie.get4ImageDetails();
        return null;
    }

    @GetMapping("/getallimagefiles")
    public List<HomeTilePageModel> getAllImageDetails() {
        this.imageDetailsServie.getAllImageDetails();
        return this.imageDetailsServie.getAllImageDetails();
    }

    @GetMapping("/getimage/{imgid}")
    public ResponseEntity<ByteArrayResource> getImageById(@PathVariable String imgid) {
        HomeTilePageModel model = new HomeTilePageModel();
        model = this.imageDetailsServie.getImageById(imgid);
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(model.getFiletype()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; description=" + model.getNewsDescription()+" .")
                .body(new ByteArrayResource(model.getData()));

    }
    @GetMapping("/getimagedescription/{imgid}")
    public ResponseEntity<HomeTilePageModel> getImageDescriptionById(@PathVariable String imgid) {
        HomeTilePageModel model = new HomeTilePageModel();
        model = this.imageDetailsServie.getImageById(imgid);
        return ResponseEntity.ok().body(model);

    }
    @GetMapping("/getallimageblobs")
    public ResponseEntity< List<byte[]>> getAllImageBlobs() {
       List<HomeTilePageModel> list = this.imageDetailsServie.getAllImageDetails();
       List<byte[]> imagebyte = new ArrayList<>();
        HttpHeaders header = new HttpHeaders();
       for(int index  = 0;index<list.size();index++){
           imagebyte.add(list.get(index).getData());
           header.add(list.get(index).getId(), list.get(index).getNewsDescription());
       }
      
       /* List<ByteArrayResource> blobData = new ArrayList<>(); */
      /*  for(int index=0;index<list.size();index++){
         
           blobData.add(new ByteArrayResource(list.get(index).getData()));
       } */
        return ResponseEntity.ok(imagebyte);
    }
}
