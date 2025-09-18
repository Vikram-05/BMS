package com.swasthId.backend.dto;

import com.swasthId.backend.entities.Medicine;
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
public class MedicineResponse {
    @Id
    private String id;
    private String patientId;
    private String doctorId;
    private String diagnosisId;
    private Number useReceipt;
    private List<Medicine.MedicineItem> medicines;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
