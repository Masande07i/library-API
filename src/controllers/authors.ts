import { Request, Response } from "express";
import { authors, Author } from "../models/author";

export const getAllAuthors = (req: Request, res: Response) => {
    res.status(200).json(authors);
};

export const getAuthorById = (req: Request, res: Response) => {
    const { id } = req.params;
    const author = authors.find((author) => author.id === Number(id));

    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json(author);
};

export const createAuthor = (req: Request, res: Response) => {
    const { name, surname } = req.body;

    const newAuthor: Author = {
        id: authors.length + 1,
        name,
        surname
    };

    authors.push(newAuthor);

    res.status(201).json(newAuthor);
};