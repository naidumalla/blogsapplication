import mongoose from 'mongoose';

const Connection = async (URL) => {
    // const URL = 'mongodb+srv://hemanth:hemanth1234@Blog-Website.dw1ipdc.mongodb.net/test?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;