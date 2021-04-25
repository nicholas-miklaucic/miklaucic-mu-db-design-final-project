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

    @GetMapping("/reservations")
    public List<Reservation> findAllReservations() {
        return repo.findAll();
    }

    @PostMapping("/reservations")
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return repo.save(reservation);
    }

    @GetMapping("/reservations/{id}")
    public Reservation findReservationById(@PathVariable("id") String id) {
        return repo.findById(new ObjectId(id)).orElseThrow();
    }

    @PutMapping("/reservations/{id}")
    public Reservation updateReservation(@PathVariable("id") String id, @RequestBody Reservation reservationUpdates) {
        Reservation reservation = repo.findById(new ObjectId(id)).orElseThrow();
        reservation.setDateReserved(reservationUpdates.getDateReserved());
        reservation.setUser(reservationUpdates.getUser());
        reservation.setBook(reservationUpdates.getBook());
        return repo.save(reservation);
    }

    @DeleteMapping("/reservations/{id}")
    public void deleteReservation(@PathVariable("id") String id) {
        // this isn't stored in other dbs so no cascades required
        repo.deleteById(new ObjectId(id));
    }
}
