package com.swasthId.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    @Id
    private String Id;
    private String fullName;
    private String aadhar;
    private String role;
    private String phoneNumber;
    private String email;
    private String password;
    private String age;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
