import mongoose from 'mongoose';

const Connection = async () => {
      const URL=`mongodb+srv://naveen1:naveen1@cluster0.7mqul.mongodb.net/shoping?retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;