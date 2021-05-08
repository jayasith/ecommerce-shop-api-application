package com.springboot.springboot.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter

@Document(collection = "orders")
public class Order {

    @Id
    private String id;
    private String sellerid;
    private String buyerid;
    private String location;
    private List<String> products;
    private String zip;
    private String city;
    private String address;
    private String date;
    private String status;

}
