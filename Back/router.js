const express = require('express');
const router = express.Router();
const dataMapper = require('./dataMapper');

// router.get('/', (req, res, next) => {
//     res.send('Hello to you')
// });

router.get('/', dataMapper.getRecepies);


module.exports = router;