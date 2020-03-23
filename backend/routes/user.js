const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/user');

//routes
router.post('/signup', signup);



module.exports = router;



// router.get('/', (req, res) =>{
//     // res.send("Hello from separate path")
// });