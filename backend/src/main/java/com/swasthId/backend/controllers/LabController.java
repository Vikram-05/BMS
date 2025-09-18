package com.swasthId.backend.controllers;

import com.swasthId.backend.dto.LabResponse;
import com.swasthId.backend.entities.Lab;
import com.swasthId.backend.services.LabServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lab")
public class LabController {

    @Autowired
    private LabServices labServices;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Lab lab){
        Boolean isEmailExist = labServices.isEmailExits(lab.getEmail());
        if(isEmailExist){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exist");
        }
        LabResponse savedLab = labServices.saveLab(lab);
        return ResponseEntity.status(HttpStatus.OK).body(savedLab);
    }

    @GetMapping("/{labId}")
    public ResponseEntity<?> getLabById(@PathVariable String labId){
        try{
            LabResponse reponse = labServices.getlabById(labId);
            return ResponseEntity.status(HttpStatus.OK).body(reponse);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("error "+e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error "+e.getMessage());
        }
    }
}
