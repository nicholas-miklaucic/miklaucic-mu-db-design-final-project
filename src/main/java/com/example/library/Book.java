package com.example.library;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "books")
public class Book {

    @Id
    public ObjectId id;

    public String title;
    public Genre genreType;

    @DBRef(lazy = true)
    public List<Author> authors;

    public Book(String title, Genre genreType, List<Author> authors) {
        this.title = title;
        this.genreType = genreType;
        this.authors = authors;
    }

    public String getTitle() {
        return title;
    }

    public Genre getGenreType() {
        return genreType;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setGenreType(Genre genreType) {
        this.genreType = genreType;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }

    public void deleteAuthor(Author author) {
        this.authors.remove(author);
    }

    @Override
    public String toString() {
        return "Book{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", genreType=" + genreType +
                ", authors=" + authors +
                '}';
    }
}
