package com.swasthId.backend.services.PharmacyServicesImpl;


import com.swasthId.backend.dto.PharmacyResponse;
import com.swasthId.backend.dto.UserResponse;
import com.swasthId.backend.entities.Pharmacy;
import com.swasthId.backend.repositories.PharmacyRepoImpl;
import com.swasthId.backend.services.PharmacyServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PharmacyServiceImpl implements PharmacyServices {

    @Autowired
    private PharmacyRepoImpl pharmacyRepo;

    @Override
    public PharmacyResponse savePharmacy(Pharmacy pharmacy){
        Pharmacy newPhremacy = new Pharmacy().builder()
                .id(pharmacy.getId())
                .fullName(pharmacy.getFullName())
                .email(pharmacy.getEmail())
                .password(pharmacy.getPassword())
                .licence(pharmacy.getLicence())
                .role("PHARMACY")
                .createdAt(pharmacy.getCreatedAt())
                .updatedAt(pharmacy.getUpdatedAt())
                .build();

        return convertUserIntoDTO(pharmacyRepo.savePharmacy(newPhremacy));
    }

    @Override
    public Boolean isEmailExist(String email){
        if(email == null){
            throw new RuntimeException("Email should not be null ");
        }
        return pharmacyRepo.isEmailExist(email);
    }

    @Override
    public PharmacyResponse getPharmacyById(String id){
        Pharmacy pharmacy = pharmacyRepo.getByPharmacyrId(id);
        if(pharmacy == null){
            throw new RuntimeException("Pharmacy not found with pharmacyId "+id);
        }
        return convertUserIntoDTO(pharmacy);
    }

    //this is used for convert pharmacy into DTO
    public PharmacyResponse convertUserIntoDTO(Pharmacy savedPharmacy){
        PharmacyResponse newPharmacy = new PharmacyResponse();

        newPharmacy.setId((savedPharmacy.getId()));
        newPharmacy.setFullName(savedPharmacy.getFullName());
        newPharmacy.setEmail(savedPharmacy.getEmail());
        newPharmacy.setRole(savedPharmacy.getRole());
        newPharmacy.setLicence(savedPharmacy.getLicence());
        newPharmacy.setPassword(savedPharmacy.getPassword());
        newPharmacy.setCreatedAt(savedPharmacy.getCreatedAt());
        newPharmacy.setUpdatedAt(savedPharmacy.getUpdatedAt());
        return newPharmacy;
    }
}
