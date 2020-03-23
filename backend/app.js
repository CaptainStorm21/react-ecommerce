const express = require ('express');
// import mongoose
const mongoose = require('mongoose');
//Morgan is used for logging request details.
const morgan = require ('morgan');
// the form data to be available in req.body. 
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
require ('dotenv').config();
//import routes
const userRoutes = require ('./routes/user');
//app
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware from userRoutes
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Our server is running on  ${port}`);
})


// load env variables
// const dotenv = require('dotenv');
// dotenv.config()
 
// //db connection
// mongoose.connect(
//   process.env.MONGO_URI,
//   {useNewUrlParser: true}
// )
// .then(() => console.log('DB Connected'))
 
// mongoose.connection.on('error', err => {
//   console.log(`DB connection error: ${err.message}`)
// });
