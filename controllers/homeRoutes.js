const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/exercise', async (req, res) => {
    res.render('exercise');
});

module.exports = router;