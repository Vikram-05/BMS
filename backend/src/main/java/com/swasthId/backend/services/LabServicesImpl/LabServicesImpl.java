package com.swasthId.backend.services.LabServicesImpl;

import com.swasthId.backend.dto.LabResponse;
import com.swasthId.backend.entities.Lab;
import com.swasthId.backend.repositories.LabRepoImpl;
import com.swasthId.backend.services.LabServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

@Service
public class LabServicesImpl implements LabServices {

    @Autowired
    private LabRepoImpl labRepo;

    @Override
    public LabResponse saveLab(Lab lab){
        Lab buildLab = new Lab().builder()
                .id(lab.getId())
                .fullName(lab.getFullName())
                .licence(lab.getLicence())
                .email(lab.getEmail())
                .password(lab.getPassword())
                .role("LAB")
                .build();
        Lab savedLab = labRepo.saveLab(buildLab);
        return converLabIntoDTO(savedLab);
    }

    @Override
    public Boolean isEmailExits(String email){
        return labRepo.isEmailExist(email);
    }

    @Override
    public LabResponse getlabById(String id){
        if(id == null){
            throw new RuntimeException("Id should not be null");
        }
        return converLabIntoDTO(labRepo.getById(id));
    }


    //It is use to convert into dto
    public LabResponse converLabIntoDTO(Lab savedLab){
        LabResponse changeIntoDTO = new LabResponse();
        changeIntoDTO.setId(savedLab.getId());
        changeIntoDTO.setFullName(savedLab.getFullName());
        changeIntoDTO.setLicence(savedLab.getLicence());
        changeIntoDTO.setEmail(savedLab.getEmail());
        changeIntoDTO.setRole(savedLab.getRole());
        changeIntoDTO.setPassword(savedLab.getPassword());
        changeIntoDTO.setCreatedAt(savedLab.getCreatedAt());
        changeIntoDTO.setUpdatedAt(savedLab.getUpdatedAt());
        return changeIntoDTO;
    }

}
