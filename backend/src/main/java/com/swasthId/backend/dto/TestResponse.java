package com.swasthId.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestResponse {
    @Id
    private String id;
    private String diagnosisId;
    private String patientId;
    private String doctorId;
    private String labId;
    private List<String> images;
    private String createdAt;
    private String updatedAt;
}
