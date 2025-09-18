package com.swasthId.backend.controllers;


import com.swasthId.backend.dto.DoctorResponse;
import com.swasthId.backend.dto.UserResponse;
import com.swasthId.backend.entities.Doctor;
import com.swasthId.backend.entities.User;
import com.swasthId.backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User user){
        Boolean isEmailExist = userServices.isEmailExist(user.getEmail());
        if(isEmailExist){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exist");
        }
        UserResponse savedUser = userServices.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> logInUser(@RequestBody User user) {
        try {
            UserResponse isUserExist = userServices.logIn(user);
            return ResponseEntity.status(HttpStatus.OK).body(isUserExist);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("unexpected_error", e.getMessage()));
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserByUserId(@PathVariable String userId){
        try{
            UserResponse existingUSer = userServices.getUserById(userId);
            return ResponseEntity.status(HttpStatus.OK).body(existingUSer);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("error "+e.getMessage());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("unexpected error "+e.getMessage());
        }
    }
}
