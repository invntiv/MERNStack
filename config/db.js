// import our environment variables
require("dotenv").config();

// initialize the mongoDB connection
import { connect } from 'mongoose';
const db = process.env.MONGO_URI;


// make our connection method
const connectDB = async () => {
    try {
        await connect(db, {
            useNewUrlParser: true
        });
        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

export default connectDB;
