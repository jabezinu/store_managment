import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected: ${conn.connection.host}`);        
    } catch (error) {
        console.error("Error message inside the database connection: ", error.message);
        process.exit(1); // 0 means success and any number other than zero is failure
    }
}