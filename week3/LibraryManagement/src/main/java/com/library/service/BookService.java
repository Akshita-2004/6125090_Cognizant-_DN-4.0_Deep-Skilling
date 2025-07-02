package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("Welcome to Cognizant Technical Academy Portal\n");
        System.out.println("Course Info: " + bookRepository.getBookInfo());
        System.out.println("Duaration" + bookRepository.getCourseDuration());
        System.out.println("Training" + bookRepository.getTrainerName());
        System.out.println("Note: Please enroll before Monday to reserve your seat.");
    }
}
