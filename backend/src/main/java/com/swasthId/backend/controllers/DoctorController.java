package com.swasthId.backend.controllers;


import com.swasthId.backend.dto.DoctorResponse;
import com.swasthId.backend.entities.Doctor;
import com.swasthId.backend.services.DoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;


@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    private DoctorServices doctorServices;


    @PostMapping("/signup")
    public ResponseEntity<?> createDoctor(@RequestBody Doctor doctor){
        Boolean isEmailExist = doctorServices.isEmailExist(doctor.getEmail());
        if(isEmailExist){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exist");
        }
        DoctorResponse savedDoctor = doctorServices.saveDoctor(doctor);
        return ResponseEntity.status(HttpStatus.OK).body(Map.of("doctor-data", savedDoctor));

    }
    @PostMapping("/login")
    public ResponseEntity<?> loginDoctor(@RequestBody Doctor doctor) {
        try {
            DoctorResponse isDoctorExist = doctorServices.logIn(doctor);
            return ResponseEntity.status(HttpStatus.OK).body(isDoctorExist);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("unexpected_error", e.getMessage()));
        }
    }


    @GetMapping("/{doctorId}")
    public ResponseEntity<?> getDriverId(@PathVariable String doctorId){
        try{
            DoctorResponse existingDoctor = doctorServices.getDoctorById(doctorId);
            return ResponseEntity.status(HttpStatus.OK).body(existingDoctor);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("error "+e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("unexpected error "+e.getMessage());
        }
    }
}
