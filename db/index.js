import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const response =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    //    console.log("db res:", response);
    console.log("database connected successfully!")

    } catch (error) {
        console.error("database connection error", error);
        process.exit(1);
    }
}

export default connectDB;