package com.swasthId.backend.repositories;


import com.swasthId.backend.entities.Doctor;
import com.swasthId.backend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepoImpl {

    @Autowired
    private MongoTemplate mongoTemplate;

    public User saveUser(User user){
        return  mongoTemplate.save(user);
    }

    public User checkLogin(User user) {
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(user.getEmail())
                .and("password").is(user.getPassword()));

        return mongoTemplate.findOne(query, User.class);
    }

    public Boolean isEmailExist(String email){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(criteria.where("email").is(email));
        return mongoTemplate.exists(query,User.class);
    }

    public User getByUserId(String id){
        return mongoTemplate.findById(id,User.class);
    }
}
