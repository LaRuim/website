import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import userRouter from './user.router';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const mongoURL =
    process.env.DATABASE_ACCESS || 'mongodb://localhost:27017/alcoding-website';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`MongoURL: ${mongoURL}`);
    console.log(`Server Started on [${PORT}] !`);
});
