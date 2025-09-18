package com.swasthId.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LabResponse {
    @Id
    private String id;
    private String fullName;
    private String licence;
    private String email;
    private String password;
    private String role;
    private LocalDateTime updatedAt;
    private LocalDateTime createdAt;
}
