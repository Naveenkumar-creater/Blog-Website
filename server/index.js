import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//components
//import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const Connect = async () => {
      const URL=`mongodb+srv://naveen1:naveen1@cluster0.7mqul.mongodb.net/blog?retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = process.env.PORT||8000;


app.listen(PORT, () =>{
    Connect()
    console.log(`Server is running successfully on PORT ${PORT}`)});