package com.swasthId.backend.services;

import com.swasthId.backend.dto.MedicineResponse;
import com.swasthId.backend.entities.Medicine;

import java.util.List;

public interface MedicineServices {

    MedicineResponse saveMedicine(Medicine medicine);

    MedicineResponse getById(String id);

    List<MedicineResponse> getByPatientId(String id);
}
