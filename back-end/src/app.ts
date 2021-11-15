import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';

import './database';

import { router } from './routes';
import errorHandler from './errors/handler';
import { AppError } from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json())
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`,
    });
})
app.use(errorHandler);


export { app };