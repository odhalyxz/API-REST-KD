const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.json({hola:"Hello words"})
});

module.exports = router;