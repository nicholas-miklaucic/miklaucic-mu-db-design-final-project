package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookOrmDao {
    @Autowired
    AuthorRepository authors;

    @Autowired
    ReservationRepository reservations;

    @Autowired
    BookRepository repo;

    @GetMapping("/books")
    public List<Book> findAllBooks() {
        return repo.findAll();
    }

    @PostMapping("/books")
    public Book createBook(@RequestBody Book book) {
        return repo.save(book);
    }

    @GetMapping("/books/{id}")
    public Book findBookById(@PathVariable("id") String id) {
        return repo.findById(new ObjectId(id)).orElseThrow();
    }

    @PutMapping("/books/{id}")
    public Book updateBook(@PathVariable("id") String id, @RequestBody Book bookUpdates) {
        Book book = repo.findById(new ObjectId(id)).orElseThrow();
        book.setTitle(bookUpdates.getTitle());
        book.setGenreType(bookUpdates.getGenreType());
        book.setAuthors(bookUpdates.getAuthors());
        return repo.save(book);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable("id") String id) {
        Book book = repo.findById(new ObjectId(id)).orElseThrow();
        // cascade delete through authors
        for (Author author : book.getAuthors()) {
            author.deleteBook(book);
            authors.save(author);
        }
        // cascade delete through reservations
        reservations.deleteAll(reservations.findByBook(book));

        repo.deleteById(new ObjectId(id));
    }
}
