package com.swasthId.backend.repositories;

import com.swasthId.backend.entities.Diagnosis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DiagnosisRepoImpl {

    @Autowired
    private MongoTemplate mongoTemplate;

    public Diagnosis saveDiagnosis(Diagnosis diagnosis){
        return mongoTemplate.save(diagnosis);
    }

    public Diagnosis getById(String id){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(Criteria.where("id").is(id));
        return mongoTemplate.findOne(query,Diagnosis.class);
    }

    public List<Diagnosis> getByPatientId(String id){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(Criteria.where("patientId").is(id));
        return mongoTemplate.find(query,Diagnosis.class);
    }
}
