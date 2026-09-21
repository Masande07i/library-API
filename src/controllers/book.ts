import { Request, Response } from "express";
import { books, Book } from "../models/book";
import { authors } from "../models/author";

export const getAllBooks = (req: Request, res: Response) => {
    const { title, year, authorId, sort, page, limit } = req.query;

    let filteredBooks = books;

    if (title) {
        filteredBooks = filteredBooks.filter((book) =>
            book.title.toLowerCase().includes(String(title).toLowerCase())
        );
    }

    if (year) {
        filteredBooks = filteredBooks.filter(
            (book) => book.year === Number(year)
        );
    }

    if (authorId) {
        filteredBooks = filteredBooks.filter(
            (book) => book.authorId === Number(authorId)
        );
    }
        if (sort === "year") {
        filteredBooks.sort((a, b) => Number(a.year) - Number(b.year));
    }

    if (sort === "-year") {
        filteredBooks.sort((a, b) => Number(b.year) - Number(a.year));
    }
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;

    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = startIndex + limitNumber;

filteredBooks = filteredBooks.slice(startIndex, endIndex);

        res.status(200).json(filteredBooks);
    };

export const getBookById = (req: Request, res: Response) => {
    const { id } = req.params;

    const book = books.find((book) => book.id === Number(id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
};

export const createBook = (req: Request, res: Response) => {
    const { title, year, authorId } = req.body;

    const author = authors.find((author) => author.id === Number(authorId));

    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    const newBook: Book = {
        id: books.length + 1,
        title,
        year,
        authorId: Number(authorId)
    };

    books.push(newBook);

    res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, year, authorId } = req.body;

    const book = books.find((book) => book.id === Number(id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    const author = authors.find((author) => author.id === Number(authorId));

    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    book.title = title;
    book.year = year;
    book.authorId = Number(authorId);

    res.status(200).json(book);
};

export const deleteBook = (req: Request, res: Response) => {
    const { id } = req.params;

    const bookIndex = books.findIndex(
        (book) => book.id === Number(id)
    );

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const deletedBook = books.splice(bookIndex, 1);

    res.status(200).json(deletedBook[0]);
};