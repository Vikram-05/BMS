package com.swasthId.backend.services.UserServicesImpl;

import com.swasthId.backend.dto.UserResponse;
import com.swasthId.backend.entities.Doctor;
import com.swasthId.backend.entities.User;
import com.swasthId.backend.repositories.UserRepoImpl;
import com.swasthId.backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServicesImpl implements UserServices {

    @Autowired
    private UserRepoImpl userRepo;

    @Override
    public UserResponse saveUser(User user){
        user.setRole("USER");
        User savedUser = userRepo.saveUser(user);
        return convertUserIntoDTO(savedUser);
    }

    @Override
    public UserResponse logIn(User user){
        User isExist = userRepo.checkLogin(user);
        if(isExist == null){
            throw new RuntimeException("Email or password not exist");
        }
        return convertUserIntoDTO(isExist);
    }

    @Override
    public Boolean isEmailExist(String email){
        if(email == null){
            throw new RuntimeException("Email should not be null ");
        }
        return userRepo.isEmailExist(email);
    }

    @Override
    public UserResponse getUserById(String id){
        User user = userRepo.getByUserId(id);
        if(user == null){
            throw new RuntimeException("User not found with userId "+id);
        }
       return convertUserIntoDTO(user);
    }

    //this is used for convert user into DTO
    public UserResponse convertUserIntoDTO(User savedUser){
        UserResponse newUser = new UserResponse();

        newUser.setId((savedUser.getId()));
        newUser.setFullName(savedUser.getFullName());
        newUser.setAadhar(savedUser.getAadhar());
        newUser.setEmail(savedUser.getEmail());
        newUser.setRole(savedUser.getRole());
        newUser.setPhoneNumber(savedUser.getPhoneNumber());
        newUser.setPassword(savedUser.getPassword());
        newUser.setCreatedAt(savedUser.getCreatedAt());
        newUser.setUpdatedAt(savedUser.getUpdatedAt());
        return newUser;
    }
}
