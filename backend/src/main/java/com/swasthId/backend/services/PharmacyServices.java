package com.swasthId.backend.services;


import com.swasthId.backend.dto.PharmacyResponse;
import com.swasthId.backend.entities.Pharmacy;

public interface PharmacyServices {

    PharmacyResponse savePharmacy(Pharmacy pharmacy);

    Boolean isEmailExist(String email);

    PharmacyResponse getPharmacyById(String id);
}
