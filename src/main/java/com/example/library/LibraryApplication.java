package com.example.library;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@SpringBootApplication
public class LibraryApplication implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(LibraryApplication.class);

    @Autowired
    private BookRepository books;

    @Autowired
    private GenreRepository genres;

    @Autowired
    private AuthorRepository authors;

    @Autowired
    private UserRepository users;

    @Autowired
    private ReservationRepository reservations;

    public static void main(String[] args) {
        SpringApplication.run(LibraryApplication.class, args);
    }

    @Override
    public void run(String... args) {
        this.makeData();
        this.logData();
    }

    private void makeData() {
        books.deleteAll();
        authors.deleteAll();
        genres.deleteAll();
        users.deleteAll();
        reservations.deleteAll();

        Genre fantasy = new Genre("FANTASY");
        Genre nonfiction = new Genre("NONFICTION");
        Genre romcom = new Genre("ROM-COM");
        genres.saveAll(List.of(fantasy, nonfiction, romcom));

        Author ursula = new Author("Ursula", "Le Guin", new ArrayList<>());
        Author sally = new Author("Sally", "Thorne", new ArrayList<>());
        Author steve = new Author("Steve", "McConnell", new ArrayList<>());
        authors.saveAll(List.of(ursula, sally, steve));

        Book lathe = new Book("The Lathe of Heaven", fantasy, List.of(ursula));
        Book hating = new Book("The Hating Game", romcom, List.of(sally));
        Book code = new Book("Code Complete 2.0", nonfiction, List.of(ursula));
        books.saveAll(List.of(lathe, hating, code));

        ursula.writeBook(lathe);
        authors.save(ursula);

        User nicholas = new User(
                "Nicholas",
                "Miklaucic",
                "PollardsRho",
                "password-plaintext-insecure",
                "nicholas.miklaucic@gmail.com",
                new Date(2001, Calendar.JANUARY, 22)
        );

        User jia = new User(
                "Jia",
                "Mu",
                "jia614",
                "P@ssw0rd",
                "mu.ji@northeastern.edu",
                new Date(2001, Calendar.JUNE, 14)
        );

        User hamburglar = new User(
                "The",
                "Hamburglar",
                "IStealBooks",
                "hunter7",
                "cantcatchme@fake.com",
                new Date(1990, Calendar.JANUARY, 1)
        );
        users.saveAll(List.of(nicholas, jia, hamburglar));

        reservations.saveAll(List.of(
                new Reservation(new Date(2020, Calendar.MAY, 15), nicholas, lathe),
                new Reservation(new Date(2020, Calendar.MARCH, 15), nicholas, lathe),
                new Reservation(new Date(2020, Calendar.MARCH, 15), nicholas, code),
                new Reservation(new Date(2019, Calendar.AUGUST, 12), jia, hating),
                new Reservation(new Date(2000, Calendar.JUNE, 30), hamburglar, code)
        ));
    }

    public void logData() {
        logger.info("-----------------------------------------");
        logger.info("Genres:");
        logger.info("{}", genres.findAll());
        logger.info("Authors:");
        logger.info("{}", authors.findAll());
        logger.info("Books:");
        logger.info("{}", books.findAll());
        logger.info("Users:");
        logger.info("{}", users.findAll());
        logger.info("Reservations:");
        logger.info("{}", reservations.findAll());
        logger.info("-----------------------------------------");
    }
}
