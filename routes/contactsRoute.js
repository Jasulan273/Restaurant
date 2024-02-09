const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res) => {
    res.send('Контакты');
});

module.exports = router;
