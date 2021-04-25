package com.example.library;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository<Book, ObjectId> {

    Optional<Book> findById(ObjectId id);

    List<Book> findAll();
}