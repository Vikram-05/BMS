package com.swasthId.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "TestData")
public class Test {

    @Id
    private String id;
    private String diagnosisId;
    private String patientId;
    private String doctorId;
    private String labId;
    private List<String> images;

    @CreatedDate
    private String createdAt;
    @LastModifiedDate
    private String updatedAt;

}
