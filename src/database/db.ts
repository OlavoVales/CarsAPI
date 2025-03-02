const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDatabase = () => {
    console.log('Wait connecting to the database');

    mongoose.connect(`${process.env.DATABSE_URL}`)
        .then(() => console.log('MongoDB Atlas Connected'))
        .catch((error: Error) => console.log(error));
};

module.exports = connectDatabase;