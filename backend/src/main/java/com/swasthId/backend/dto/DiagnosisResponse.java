package com.swasthId.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DiagnosisResponse {
    @Id
    private String id;
    private String patientId;
    private String doctorId;
    private String testId;
    private List<String> recommendedTest;
    private String description;
    private String medicineId;
    private LocalDateTime createdAt;
    private LocalDateTime upadtedAt;
}
