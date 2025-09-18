package com.swasthId.backend.services.DoctorServidesImpl;

import com.swasthId.backend.dto.DoctorResponse;
import com.swasthId.backend.entities.Doctor;
import com.swasthId.backend.services.DoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.swasthId.backend.repositories.DoctorRepoImpl;

import javax.print.Doc;


@Service()
public class DoctorServicesImpl implements DoctorServices {
    @Autowired
    private DoctorRepoImpl doctorRepo;

    @Override
    public DoctorResponse saveDoctor(Doctor doctor){
        Doctor buildDoctor = Doctor.builder()
                .id(doctor.getId())
                .fullName(doctor.getFullName())
                .aadhar(doctor.getAadhar())
                .role("DOCTOR")
                .email(doctor.getEmail())
                .licence(doctor.getLicence())
                .phoneNumber(doctor.getPhoneNumber())
                .specialization(doctor.getSpecialization())
                .password(doctor.getPassword())
                .createdAt(doctor.getCreatedAt())
                .updatedAt(doctor.getUpdatedAt())
                .build();

        Doctor savedDoctor = doctorRepo.saveDoctor(buildDoctor);
        return convertDoctorIntoDTO(savedDoctor);
    }

    @Override
    public DoctorResponse logIn(Doctor doctor){
        Doctor isExist = doctorRepo.checkLogin(doctor);
        if(isExist == null){
            throw new RuntimeException("Email or password not exist");
        }
        return convertDoctorIntoDTO(isExist);
    }

    @Override
    public Boolean isEmailExist(String email){
        if(email == null){
            throw new RuntimeException("Email should not be null");
        }
        return doctorRepo.isEmailAlreadyExist(email);
    }

    @Override
    public DoctorResponse getDoctorById(String id){
        Doctor doctor = doctorRepo.getByDoctorId(id);
        if(doctor == null){
            throw new RuntimeException("Doctor not found with this id : "+id);
        }
        return convertDoctorIntoDTO(doctor);
    }


    //this is used to convert into dto
    public DoctorResponse convertDoctorIntoDTO(Doctor savedDoctor){
        DoctorResponse newDoctor = new DoctorResponse();

        newDoctor.setId(savedDoctor.getId());
        newDoctor.setFullName(savedDoctor.getFullName());
        newDoctor.setAadhar(savedDoctor.getAadhar());
        newDoctor.setEmail(savedDoctor.getEmail());
        newDoctor.setLicence(savedDoctor.getLicence());
        newDoctor.setPassword(savedDoctor.getPassword());
        newDoctor.setRole(savedDoctor.getRole());
        newDoctor.setSpecialization(savedDoctor.getSpecialization());
        newDoctor.setPhoneNumber(savedDoctor.getPhoneNumber());
        newDoctor.setCreatedAt(savedDoctor.getCreatedAt());
        newDoctor.setUpdatedAt(savedDoctor.getUpdatedAt());
        return newDoctor;
    }
}
