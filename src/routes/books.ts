import { Router, Request, Response } from "express";
import { getAllBooks, getBookById } from "../controllers/book"
import { param, validationResult } from "express-validator";

export const router = Router();

router.get("/", getAllBooks);

router.get(
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