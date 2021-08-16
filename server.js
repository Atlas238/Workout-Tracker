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

app.get('/stats', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

app.get('/exercise/?', (req, res) => {
    try {
        db.Workout.find({}).populate('Exercise')
        .then((data)=> {
            res.json(data);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.get('/api/workouts', (req, res) => {
    try {
        db.Workout.find({}).populate('Exercise')
        .then(data => {
            res.json(data);
        })
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});