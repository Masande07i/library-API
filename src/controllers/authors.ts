import { Request, Response } from "express";

let authors = [
    { id: 1, name: "J.K.", surname: "Rowling" },
    { id: 2, name: "George", surname: "Orwell" },
];

export const getAllAuthors = (req: Request, res: Response) => {
    res.status(200).json(authors);
};

export const getAuthorById =(req:Request, res:Response) =>{
    const { id } = req.params;
    const author = authors.find((author) =>author.id === Number(id));

    if (!author){
        return res.status(404).send("Author not found");
    }

    res.status(200).json(author);
};

export const createAuthor = (req:Request, res:Response) =>{
    const {name,surname} = req.body;
    const newAuthor = {id: authors.length + 1, name , surname};

    authors.push(newAuthor);

    res.status(201).json(newAuthor)
}