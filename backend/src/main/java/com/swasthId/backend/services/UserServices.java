package com.swasthId.backend.services;


import com.swasthId.backend.dto.DoctorResponse;
import com.swasthId.backend.dto.UserResponse;
import com.swasthId.backend.entities.User;

public interface UserServices {

    UserResponse saveUser(User user);

    Boolean isEmailExist(String email);

    UserResponse getUserById(String id);

    UserResponse logIn(User user);
}
