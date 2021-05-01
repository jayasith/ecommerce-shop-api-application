package com.springboot.springboot.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter

@Document(collection = "product")
public class Product {

    @Id
    private String id;
    private String sellerId;
    private String name;
    private String quantity;
    private String price;
    private String description;
}
