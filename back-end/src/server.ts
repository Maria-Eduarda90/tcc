import "reflect-metadata";
import express from 'express';
import path from 'path';
import cors from 'cors';

import './database';

import { router } from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json())
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)

app.listen(3333, () => console.log('rodando'));