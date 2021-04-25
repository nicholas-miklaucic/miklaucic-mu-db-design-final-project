package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserOrmDao {
    @Autowired
    ReservationRepository reservations;

    @Autowired
    UserRepository repo;

    @GetMapping("/api/users")
    public List<User> findAllUsers() {
        return repo.findAll();
    }

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        return repo.save(user);
    }

    @GetMapping("/api/users/{id}")
    public User findUserById(@PathVariable("id") String id) {
        return repo.findById(new ObjectId(id)).orElseThrow();
    }

    @PutMapping("/api/users/{id}")
    public User updateUser(@PathVariable("id") String id, @RequestBody User userUpdates) {
        User user = repo.findById(new ObjectId(id)).orElseThrow();
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setDob(userUpdates.getDob());
        user.setEmail(userUpdates.getEmail());
        return repo.save(user);
    }

    @DeleteMapping("/api/users/{id}")
    public void deleteUser(@PathVariable("id") String id) {
        User user = repo.findById(new ObjectId(id)).orElseThrow();
        // cascade delete through reservations
        reservations.deleteAll(reservations.findByUser(user));
        repo.deleteById(new ObjectId(id));
    }
}
