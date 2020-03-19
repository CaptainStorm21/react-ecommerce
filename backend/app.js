const express = require ('express');
// import mongoose
const mongoose = require('mongoose');
require ('dotenv').config()

//app
const app = express();
//routes
app.get('/', (req, res)=>{
    res.send ("hello from node")
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Our server is running on  ${port}`);
})


// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});
