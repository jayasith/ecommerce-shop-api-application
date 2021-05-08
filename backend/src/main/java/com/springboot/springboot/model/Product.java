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
    private String imgurl;
    private String name;
    private String itemprice;
    private String category;
    private String description;
}
