const express = require('express');
const router = express.Router();

const {sayHi} = require('../controllers/user');

//routes
router.get('/', sayHi);



module.exports = router;



// router.get('/', (req, res) =>{
//     // res.send("Hello from separate path")
// });