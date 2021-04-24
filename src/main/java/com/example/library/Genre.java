package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "genres")
public class Genre {
    @Id
    public String id;

    public Genre(String id) {
        this.id = id;
    }
}
