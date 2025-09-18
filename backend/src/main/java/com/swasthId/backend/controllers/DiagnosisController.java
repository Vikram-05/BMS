package com.swasthId.backend.controllers;


import com.swasthId.backend.dto.DiagnosisResponse;
import com.swasthId.backend.entities.Diagnosis;
import com.swasthId.backend.services.DiagnosisServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diagnosis")
public class DiagnosisController {

    @Autowired
    public DiagnosisServices diagnosisServices;

    @PostMapping("/save")
    public ResponseEntity<?> saveDiagnosis(@RequestBody Diagnosis diagnosis){
        DiagnosisResponse saved = diagnosisServices.saveDiagnosisData(diagnosis);
        return ResponseEntity.status(HttpStatus.OK).body(saved);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<?> getById(@PathVariable String Id){
        DiagnosisResponse savedResponse = diagnosisServices.getById(Id);
        return ResponseEntity.status(HttpStatus.OK).body(savedResponse);
    }
    @GetMapping("/patientId/{patientId}")
    public ResponseEntity<?> getByPatientId(@PathVariable String patientId){
        List<DiagnosisResponse> savedResponse = diagnosisServices.getByPatientId(patientId);
        return ResponseEntity.status(HttpStatus.OK).body(savedResponse);
    }
}
