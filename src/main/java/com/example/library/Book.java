package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "books")
public class Book {

    @Id
    public String id;

    public String title;
    public Genre genreType;
    public List<Author> authors;

    public Book(String title, Genre genreType, List<Author> authors) {
        this.title = title;
        this.genreType = genreType;
        this.authors = authors;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Genre getGenreType() {
        return genreType;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    @Override
    public String toString() {
        return this.title;
    }
}
