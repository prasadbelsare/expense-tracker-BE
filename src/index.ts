import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records'
import cors from 'cors';
import dotenv from 'dotenv';
const app: Express = express();
const port = process.env.PORT || 3001;



app.use(express.json());
app.use(cors());
dotenv.config();

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    throw new Error("Missing MONGO_URI");
}
mongoose.connect(mongoURI).then(() => console.log("Connected to MongoDB!")).catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use('/financial-records', financialRecordRouter)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})