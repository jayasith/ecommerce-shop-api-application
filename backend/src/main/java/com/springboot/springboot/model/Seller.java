package com.springboot.springboot.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter

@Document(collection = "sellers")
public class Seller {

    @Id
    private String id;
    private String username;
    private String password;
    private String email;
}
