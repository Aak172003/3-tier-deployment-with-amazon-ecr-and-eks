import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


const MONGO_URI = process.env.MONGO_URI
console.log("MONGO_URI ::::: ", MONGO_URI)

export const connection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Could not connect to database:", error);
    }
};

