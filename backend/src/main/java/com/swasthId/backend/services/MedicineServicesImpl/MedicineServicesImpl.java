package com.swasthId.backend.services.MedicineServicesImpl;


import com.swasthId.backend.dto.MedicineResponse;
import com.swasthId.backend.entities.Medicine;
import com.swasthId.backend.repositories.MedicineRepoImpl;
import com.swasthId.backend.services.MedicineServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineServicesImpl implements MedicineServices {

    @Autowired
    private MedicineRepoImpl medicineRepo;

    @Override
    public MedicineResponse saveMedicine(Medicine medicine){
        return convertIntoDTO(medicineRepo.saveMedicine(medicine));
    }

    @Override
    public MedicineResponse getById(String id){
        return convertIntoDTO(medicineRepo.getById(id));
    }

    @Override
    public List<MedicineResponse> getByPatientId(String id) {
        List<Medicine> medicines = medicineRepo.getByPatientId(id);
        return medicines.stream()
                .map(this::convertIntoDTO)
                .toList();
    }


//    convert into DTO


    public MedicineResponse convertIntoDTO(Medicine medicine){
        MedicineResponse changeResponse = new MedicineResponse();
        changeResponse.setId(medicine.getId());
        changeResponse.setPatientId(medicine.getPatientId());
        changeResponse.setMedicines(medicine.getMedicines());
        changeResponse.setDiagnosisId(medicine.getDiagnosisId());
        changeResponse.setDoctorId(medicine.getDoctorId());
        changeResponse.setUseReceipt(medicine.getUseReceipt());
        changeResponse.setCreatedAt(medicine.getCreatedAt());
        changeResponse.setUpdatedAt(medicine.getUpdatedAt());
        return changeResponse;
    }
}
