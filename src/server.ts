import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";

import mongoose from "mongoose";
import { routes } from "routes";

const uri = `mongodb+srv://db_mypharma:${process.env.MONGO_PASS}@cluster0.uwbyg.mongodb.net/db_mypharma?retryWrites=true&w=majority`;
const url = "mongodb://localhost:27017/my_pharma";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }

    return response.status(500).json(error);
  }
);

app.listen(process.env.PORT || 4002, () => console.log("Server is running"));
