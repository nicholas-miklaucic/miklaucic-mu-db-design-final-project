package com.example.library;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository<Book, String> {

    Book findByTitle(String title);
    List<Book> findByGenreType(Genre genreType);
}