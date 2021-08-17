const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get('/api/workouts', async (req, res) => {
    try {
        const data = await db.Workout.aggregate([{$addFields:{totalDuration:{$sum:"$exercises.duration"}}}]);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.put('/api/workouts/', async (req, res) => {
    try {
        const data = await db.Workout.create(req.body);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.post('/api/workouts', async (req, res) => {
    try {
        const data = await db.Workout.create(req.body);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.get('/api/workouts/range', async (req, res) => {
    try {
        const data = await db.Workout.aggregate([
            {$addFields:{totalDuration:{$sum:"$exercises.duration"}}}
        ]);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.get('/stats', async (req, res) => {
    try {
        const data = await db.Workout.find({}).populate('Exercise');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.get('/exercise?', async (req, res) => {
    try {
        ({ id } = req.query)
        const data = await db.Workout.findById(id).populate('Exercise');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.put('/exercise', async (req, res) => {
    try {
        const data = await db.Workout.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});