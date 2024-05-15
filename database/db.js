import mongoose  from 'mongoose'

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;