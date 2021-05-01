package com.springboot.springboot.repository;

import com.springboot.springboot.model.Buyer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface buyerRepository extends MongoRepository<Buyer, String> {

    public  Buyer findByUsername (String username);

}
