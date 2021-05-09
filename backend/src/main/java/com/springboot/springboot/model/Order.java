package com.springboot.springboot.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter

@Document(collection = "orders")
public class Order {

    @Id
    private String id;
    private String buyerid;
    private ArrayList<Product> products;
    private String state;
    private String city;
    private String streetaddress;
    private String date;
    private String status;

}
