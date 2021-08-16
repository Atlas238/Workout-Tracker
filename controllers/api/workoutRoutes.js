const router = require('express').Router();

router.get('/workouts', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.put('/workouts/:id', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/workouts', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/workouts/range', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;