"use strict";
/**
 * Library Management System Task
 * ==================================
 * You are tasked with implementing a basic Library Management System.
 * The system should support the following operations:
 * 1. Add a book to the library.
 *    - Each book has a `title` (string), `author` (string), and `ISBN` (number, unique).
 * 2. Remove a book from the library by its ISBN.
 * 3. Search books:
 *    - By title (partial match, case-insensitive).
 *    - By author (partial match, case-insensitive).
 * 4. List all books in the library.
 *
 * Requirements:
 * - Use TypeScript to define proper types/interfaces for the books and the library.
 * - Implement the library as a class named `Library`.
 * - Write clean, readable, and maintainable code.
 * - Ensure edge cases (e.g., removing a non-existent book) are handled gracefully.
 *
 * Example Commands:
 * - Add books to the library.
 * - Search for books by title or author.
 * - Remove a book by ISBN.
 * - List all books.
 *
 * Below is a skeleton code to help you get started.
 */
// Create a new library instance
const myLibrary = new Library();
// Add books to the library
console.log("Adding books...");
myLibrary.addBook({ title: "Clean Code", author: "Robert C. Martin", ISBN: 123 });
myLibrary.addBook({ title: "The Pragmatic Programmer", author: "Andrew Hunt", ISBN: 456 });
myLibrary.addBook({ title: "Code Complete", author: "Steve McConnell", ISBN: 789 });
// List all books
console.log("Listing all books:");
console.log(myLibrary.listBooks());
// Search for books by title
console.log("Searching for books by title 'Code':");
console.log(myLibrary.searchBooksByTitle("Code"));
// Search for books by author
console.log("Searching for books by author 'Andrew Hunt':");
console.log(myLibrary.searchBooksByAuthor("Andrew Hunt"));
// Remove a book by ISBN
console.log("Removing book with ISBN 123:");
myLibrary.removeBook(123);
// List all books after removal
console.log("Listing all books after removal:");
console.log(myLibrary.listBooks());
/**
 * How to Run:
 * 1. Compile the TypeScript file:
 *    npx tsc
 * 2. Run the compiled JavaScript file:
 *    node dist/index.js
 */
