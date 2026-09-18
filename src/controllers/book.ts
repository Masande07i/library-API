import { Request, Response } from "express";
import { books } from "../models/book";

export const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json(books);
};

export const getBookById = (req: Request, res: Response) => {
    const { id } = req.params;

    const book = books.find((book) => book.id === Number(id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
};