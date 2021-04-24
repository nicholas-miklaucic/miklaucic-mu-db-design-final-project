package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "authors")
public class Author {

    @Id
    public String id;

    public String firstName;
    public String lastName;
    public List<Book> books;
}
