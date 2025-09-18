package com.swasthId.backend.repositories;

import com.swasthId.backend.entities.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;


@Repository
public class PharmacyRepoImpl {

    @Autowired
    private MongoTemplate mongoTemplate;

    public Pharmacy savePharmacy(Pharmacy pharmacy){
        return  mongoTemplate.save(pharmacy);
    }

    public Boolean isEmailExist(String email){
        Query query = new Query();
        Criteria criteria = new Criteria();
        query.addCriteria(criteria.where("email").is(email));
        return mongoTemplate.exists(query,Pharmacy.class);
    }

    public Pharmacy getByPharmacyrId(String id){
        return mongoTemplate.findById(id,Pharmacy.class);
    }
}
