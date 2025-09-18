package com.swasthId.backend.repositories;

import com.swasthId.backend.entities.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.sql.Driver;

@Repository
public class DoctorRepoImpl {
    @Autowired
    private MongoTemplate mongoTemplate;

    public Doctor saveDoctor(Doctor doctor){
        return mongoTemplate.save(doctor);
    }

    public Doctor checkLogin(Doctor doctor) {
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(doctor.getEmail())
                .and("password").is(doctor.getPassword()));

        return mongoTemplate.findOne(query, Doctor.class);
    }

    public Boolean isEmailAlreadyExist(String email){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(criteria.where("email").is(email));
        return mongoTemplate.exists(query,Doctor.class);
    }


    public Doctor getByDoctorId(String id){
        return mongoTemplate.findById(id,Doctor.class);
    }

}
