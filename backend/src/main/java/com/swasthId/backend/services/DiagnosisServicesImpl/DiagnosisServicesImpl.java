package com.swasthId.backend.services.DiagnosisServicesImpl;


import com.swasthId.backend.dto.DiagnosisResponse;
import com.swasthId.backend.entities.Diagnosis;
import com.swasthId.backend.entities.Medicine;
import com.swasthId.backend.repositories.DiagnosisRepoImpl;
import com.swasthId.backend.services.DiagnosisServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiagnosisServicesImpl implements DiagnosisServices {

    @Autowired
    public DiagnosisRepoImpl diagnosisRepo;


    @Override
    public DiagnosisResponse saveDiagnosisData(Diagnosis diagnosis){
        return changeIntoDTO(diagnosisRepo.saveDiagnosis(diagnosis));
    }

    @Override
    public DiagnosisResponse getById(String id){
        return changeIntoDTO(diagnosisRepo.getById(id));
    }
    @Override
    public List<DiagnosisResponse> getByPatientId(String patientId) {
        List<Diagnosis> diagnoses = diagnosisRepo.getByPatientId(patientId);
        return diagnoses.stream()
                .map(this::changeIntoDTO)
                .toList();
    }


    //conter into Diagnosis into DTO

    public DiagnosisResponse changeIntoDTO(Diagnosis diagnosis){
        DiagnosisResponse changed = new DiagnosisResponse();

        changed.setId((diagnosis.getId()));
        changed.setPatientId(diagnosis.getPatientId());
        changed.setDoctorId(diagnosis.getDoctorId());
        changed.setDescription(diagnosis.getDescription());
        changed.setTestId(diagnosis.getTestId());
        changed.setDoctorId(diagnosis.getMedicineId());
        changed.setRecommendedTest(diagnosis.getRecommendedTest());
        changed.setMedicineId(diagnosis.getMedicineId());
        changed.setCreatedAt(diagnosis.getCreatedAt());
        changed.setUpadtedAt(diagnosis.getUpadtedAt());
        return changed;
    }
}
