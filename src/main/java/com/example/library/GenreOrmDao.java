package com.example.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class GenreOrmDao {
    @Autowired
    GenreRepository genres;

    @GetMapping("/api/genres")
    public List<Genre> getAllGenres() {
        return genres.findAll();
    }
}
