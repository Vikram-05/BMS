package com.swasthId.backend.services;

import com.swasthId.backend.dto.DoctorResponse;
import com.swasthId.backend.entities.Doctor;

import java.sql.Driver;

public interface DoctorServices {

    DoctorResponse saveDoctor(Doctor doctor);

    Boolean isEmailExist(String email);

    DoctorResponse getDoctorById(String id);

    DoctorResponse logIn(Doctor doctor);
}
