package com.swasthId.backend.services;

import com.swasthId.backend.dto.DiagnosisResponse;
import com.swasthId.backend.entities.Diagnosis;

import java.util.List;

public interface DiagnosisServices {

    DiagnosisResponse saveDiagnosisData(Diagnosis diagnosis);

    DiagnosisResponse getById(String id);

    List<DiagnosisResponse> getByPatientId(String patientId);
}
