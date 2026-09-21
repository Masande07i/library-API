import { Router, Request, Response } from "express";
import { getAllBooks, getBookById,createBook ,updateBook,deleteBook } from "../controllers/book"
import {body, param, validationResult } from "express-validator";


export const bookRouter = Router();

bookRouter.get("/", getAllBooks);

bookRouter.get(
    "/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        getBookById(req, res);
    }
);

bookRouter.post(
    "/",
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("year").notEmpty().withMessage("year is required"),
        body("authorId").isInt().withMessage("Author ID must be an integer"),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        createBook(req, res);
    }
);

bookRouter.put(
    "/:id",
    [
        param("id").isInt().withMessage("ID must be an integer"),
        body("title").notEmpty().withMessage("Title is required"),
        body("year").notEmpty().withMessage("year is required"),
        body("authorId").isInt().withMessage("Author ID must be an integer"),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        updateBook(req, res);
    }
);

bookRouter.delete(
    "/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        deleteBook(req, res);
    }
);

