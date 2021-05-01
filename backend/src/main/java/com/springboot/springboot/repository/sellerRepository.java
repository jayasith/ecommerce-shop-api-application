package com.springboot.springboot.repository;

import com.springboot.springboot.model.Seller;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface sellerRepository extends MongoRepository<Seller,String> {

    public Seller findByUsername (String username);
}
