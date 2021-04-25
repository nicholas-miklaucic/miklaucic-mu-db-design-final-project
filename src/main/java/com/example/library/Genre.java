package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "genres")
public class Genre {
    @Id
    public final String id;

    public Genre(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Genre{" +
                "id='" + id + '\'' +
                '}';
    }
}
