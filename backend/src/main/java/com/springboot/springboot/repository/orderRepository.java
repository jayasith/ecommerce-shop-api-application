package com.springboot.springboot.repository;

import com.springboot.springboot.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface orderRepository extends MongoRepository<Order,String> {

    public List<Order> findBySellerid(String id);

    public List<Order> findByBuyerid(String id);
}
