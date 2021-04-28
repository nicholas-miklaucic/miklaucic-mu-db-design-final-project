package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface AuthorRepository extends MongoRepository<Author, ObjectId> {
    Optional<Author> findById(String id);

    List<Author> findAll();
}
