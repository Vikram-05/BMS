package com.swasthId.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PharmacyResponse {
    @org.springframework.data.annotation.Id
    private String id;
    private String fullName;
    private String email;
    private String password;
    private String licence;
    private String role;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
