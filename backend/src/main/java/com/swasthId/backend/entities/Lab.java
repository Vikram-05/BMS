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

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "LabData")
public class Lab {

    @Id
    private String id;
    private String fullName;
    private String licence;
    private String email;
    private String password;
    private String role;
    @LastModifiedDate
    private LocalDateTime updatedAt;
    @CreatedDate
    private LocalDateTime createdAt;
}

