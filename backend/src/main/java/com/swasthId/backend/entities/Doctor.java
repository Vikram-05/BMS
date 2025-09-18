package com.swasthId.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "doctorData")
public class Doctor {

    @Id
    private String id;
    private String fullName;
    private String aadhar;
    private String role;
    private String email;
    private String password;
    private String licence;
    private List<String> specialization;
    private String phoneNumber;
    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;

}
