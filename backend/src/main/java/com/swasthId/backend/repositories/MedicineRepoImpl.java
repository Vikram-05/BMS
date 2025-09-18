package com.swasthId.backend.repositories;


import com.swasthId.backend.entities.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MedicineRepoImpl {

    @Autowired
    private MongoTemplate mongoTemplate;

    public Medicine saveMedicine(Medicine medicine){
        return mongoTemplate.save(medicine);
    }

    public Medicine getById(String id){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(Criteria.where("id").is(id));
        return mongoTemplate.findOne(query,Medicine.class);
    }

    public List<Medicine> getByPatientId(String id){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(Criteria.where("patientId").is(id));
        return mongoTemplate.find(query,Medicine.class);
    }

}
