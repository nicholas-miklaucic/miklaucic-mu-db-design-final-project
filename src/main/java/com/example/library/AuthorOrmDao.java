package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping()
public class AuthorOrmDao {
    @Autowired
    BookRepository books;

    @Autowired
    AuthorRepository repo;

    @GetMapping("/api/authors")
    public List<Author> findAllAuthors() {
        return repo.findAll();
    }

    @PostMapping("/api/authors")
    public Author createAuthor(@RequestBody Author author) {
        return repo.save(author);
    }

    @GetMapping("/api/authors/{id}")
    public Author findAuthorById(@PathVariable("id") String id) {
        return repo.findById(new ObjectId(id)).orElseThrow();
    }

    @PutMapping("/api/authors/{id}")
    public Author updateAuthor(@PathVariable("id") String id, @RequestBody Author authorUpdates) {
        Author author = repo.findById(new ObjectId(id)).orElseThrow();
        author.setFirstName(authorUpdates.getFirstName());
        author.setLastName(authorUpdates.getLastName());
        author.setBooks(authorUpdates.getBooks());
        return repo.save(author);
    }

    @DeleteMapping("/api/authors/{id}")
    public void deleteAuthor(@PathVariable("id") String id) {
        Author author = repo.findById(new ObjectId(id)).orElseThrow();
        // cascade delete through books
        for (Book book : author.getBooks()) {
            book.deleteAuthor(author);
            books.save(book);
        }

        repo.deleteById(new ObjectId(id));
    }
}
