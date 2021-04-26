package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReservationOrmDao {
    @Autowired
    ReservationRepository repo;

    @GetMapping("/api/reservations")
    public List<Reservation> findAllReservations() {
        return repo.findAll();
    }

    @PostMapping("/api/reservations")
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return repo.save(reservation);
    }

    @GetMapping("/api/reservations/{id}")
    public Reservation findReservationById(@PathVariable("id") String id) {
        return repo.findById(new ObjectId(id)).orElseThrow();
    }

    @GetMapping("/api/reservations/{id}")
    public User findUser(@PathVariable("id") String id) {
        Reservation reservation = repo.findById(new ObjectId(id)).orElseThrow();
        return reservation.getUser();
    }


    @PutMapping("/api/reservations/{id}")
    public Reservation updateReservation(@PathVariable("id") String id, @RequestBody Reservation reservationUpdates) {
        Reservation reservation = repo.findById(new ObjectId(id)).orElseThrow();
        reservation.setDateReserved(reservationUpdates.getDateReserved());
        reservation.setUser(reservationUpdates.getUser());
        reservation.setBook(reservationUpdates.getBook());
        return repo.save(reservation);
    }

    @DeleteMapping("/api/reservations/{id}")
    public void deleteReservation(@PathVariable("id") String id) {
        // this isn't stored in other dbs so no cascades required
        repo.deleteById(new ObjectId(id));
    }
}
