package com.swasthId.backend.controllers;

import com.swasthId.backend.dto.MedicineResponse;
import com.swasthId.backend.entities.Medicine;
import com.swasthId.backend.services.MedicineServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicine")
public class MedicineController {

    @Autowired
    public MedicineServices medicineServices;

    @PostMapping
    public ResponseEntity<MedicineResponse> saveMedicine(@RequestBody Medicine medicine) {
        MedicineResponse saved = medicineServices.saveMedicine(medicine);
        return ResponseEntity.ok(saved);
    }

    // Get a medicine by its ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getMedicineById(@PathVariable String id) {
        try {
            MedicineResponse response = medicineServices.getById(id);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body("Medicine not found: " + e.getMessage());
        }
    }

    // Get all medicines by patient ID
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<MedicineResponse>> getMedicinesByPatientId(@PathVariable String patientId) {
        List<MedicineResponse> medicines = medicineServices.getByPatientId(patientId);
        return ResponseEntity.ok(medicines);
    }
}
