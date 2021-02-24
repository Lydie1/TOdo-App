import express from "express";
import * as bookControl from "../controllers/bookController";

import * as authControl from "../controllers/AuthController"


const bookRoute = express.Router()

bookRoute.route("/")
                   .post(bookControl.createBook)
                   .get(authControl.protect, bookControl.getAllBooks)
                

bookRoute.route('/:id')
                   .delete(bookControl.deleteBook)
                   .patch(bookControl.updateBook)
                   .get(bookControl.getBook)


export default bookRoute;