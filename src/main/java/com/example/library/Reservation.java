package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "reservations")
public class Reservation {
    @Id
    public String id;

    public Date dateReserved;

    @DBRef
    public User user;

    @DBRef
    public Book book;

    public Reservation(Date dateReserved, User user, Book book) {
        this.dateReserved = dateReserved;
        this.user = user;
        this.book = book;
    }

    public Date getDateReserved() {
        return dateReserved;
    }

    public void setDateReserved(Date dateReserved) {
        this.dateReserved = dateReserved;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", dateReserved=" + dateReserved +
                ", user=" + user +
                ", book=" + book +
                '}';
    }
}
