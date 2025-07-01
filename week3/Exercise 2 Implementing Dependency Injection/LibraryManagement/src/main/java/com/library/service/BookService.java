package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("Welcome to Cognizant Library Portal");
        System.out.println("Recommended Book: " + bookRepository.getBookInfo());
    }
}
