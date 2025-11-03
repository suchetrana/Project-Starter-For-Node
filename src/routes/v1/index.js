// app.use() -> 1) used to register more middleware 
//              2) mount to router corresponding to url
// app.use('/path', middleware);


const express = require('express');

const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({msg: "ok"});
})

module.exports = router;
