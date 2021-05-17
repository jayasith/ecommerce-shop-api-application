package com.springboot.springboot.repository;

import com.springboot.springboot.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface productRepository extends MongoRepository<Product,String> {

    public List<Product> findBySellerId(String id);
    public Optional<Product> findById(String id);
}
