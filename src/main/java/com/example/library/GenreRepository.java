package com.example.library;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GenreRepository extends MongoRepository<Genre, String> {
    List<Genre> findAll();
}
