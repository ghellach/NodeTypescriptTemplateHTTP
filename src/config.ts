import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

export function env(): void {
    dotenv.config({path: path.join(__dirname, '../config.env')});
    return;
}

export function mongoDB(): void {
    try{
        mongoose.connect(
            String(process.env.MONGO),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            },
            () => {
                console.log(Date(), "| Connected to MongoDB instance successfully !");
            }
        );
    }catch(err){
        console.log(err);
    }
    
    return;
}