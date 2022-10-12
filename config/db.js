require('dotenv').config();

const mongoose = require("mongoose");


function connectDB() {
    //database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,  useUnifiedTopology: true });
    const connection = mongoose.connection;
    mongoose.connection.once('open', function ()  {
        console.log('Database connected ');
    }).on('error', function (err) {
        console.log(err);
      })
}


module.exports = connectDB;