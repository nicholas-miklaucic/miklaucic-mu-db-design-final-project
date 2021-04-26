package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends MongoRepository<Reservation, ObjectId> {
    Optional<Reservation> findById(ObjectId id);
    List<Reservation> findAll();
    List<Reservation> findByBook(Book book);
    List<Reservation> findByUser(User user);
}
