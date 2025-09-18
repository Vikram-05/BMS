package com.swasthId.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "MedicineData")
public class Medicine {
    @Id
    private String id;
    private String patientId;
    private String doctorId;
    private String diagnosisId;
    private Number useReceipt;
    private List<MedicineItem> medicines;
    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MedicineItem {
        private String medicineName;
        private PrescriptionType prescription;
        private Number noOfDays;
    }

    public enum PrescriptionType {
        BEFORE_BREAKFAST,
        AFTER_BREAKFAST,
        BEFORE_LUNCH,
        AFTER_LUNCH,
        BEFORE_DINNER,
        AFTER_DINNER,
        AFTER_WAKING_UP,
        BEFORE_SLEEP,
        DURING_SLEEP,
        MORNING,
        AFTERNOON,
        EVENING,
        NIGHT,
        EVERY_6_HOURS,
        EVERY_8_HOURS,
        EVERY_12_HOURS,
        EVERY_24_HOURS,
        AS_NEEDED,
        BEFORE_EXERCISE,
        AFTER_EXERCISE,
        BEFORE_TRAVEL,
        AFTER_TRAVEL,
        WITH_MEALS,
        WITHOUT_MEALS,
        EVERY_OTHER_DAY,
        WEEKLY,
        MONTHLY,
        WITH_WATER,
        WITH_MILK,
        WITH_FOOD,
        EMPTY_STOMACH,
        SUBLINGUAL,
        TOPICAL,
        INHALATION,
        INJECTION,
        TRANSDERMAL_PATCH
    }

}
