package com.swasthId.backend.controllers;

import com.swasthId.backend.dto.PharmacyResponse;
import com.swasthId.backend.entities.Pharmacy;
import com.swasthId.backend.services.PharmacyServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/pharmacy")
public class PharmacyController {

    @Autowired
    private PharmacyServices pharmacyServices;

    @PostMapping("/signup")
    public ResponseEntity<?> createPharmacy(@RequestBody Pharmacy pharmacy){
        Boolean isEmailExist = pharmacyServices.isEmailExist(pharmacy.getEmail());
        if(isEmailExist){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exist");
        }
        PharmacyResponse savedPharmacy = pharmacyServices.savePharmacy(pharmacy);
        return ResponseEntity.status(HttpStatus.OK).body(savedPharmacy);
    }

    @GetMapping("/{pharmacyId}")
    public ResponseEntity<?> getPharmacyByUserId(@PathVariable String pharmacyId){
        try{
            PharmacyResponse existingPharmacy = pharmacyServices.getPharmacyById(pharmacyId);
            return ResponseEntity.status(HttpStatus.OK).body(existingPharmacy);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("error "+e.getMessage());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("unexpected error "+e.getMessage());
        }
    }
}
