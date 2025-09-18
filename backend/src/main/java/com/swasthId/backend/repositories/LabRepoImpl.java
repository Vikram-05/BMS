package com.swasthId.backend.repositories;

import com.swasthId.backend.entities.Lab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class LabRepoImpl {
    @Autowired
    private MongoTemplate mongoTemplate;

    public Lab saveLab(Lab lab){
        return mongoTemplate.save(lab);
    }

    public Boolean isEmailExist(String email){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(criteria.where("email").is(email));
        return mongoTemplate.exists(query,Lab.class);
    }

    public Lab getById(String id){
        return mongoTemplate.findById(id,Lab.class);
    }
}
