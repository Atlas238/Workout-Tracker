const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        require: "Username is required."
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required.",
        validate: [({ length }) => length >= 8, "Password must be at least 8 characters."]
    },
    email: {
        type: String,
        validate: [/.+\@.+\..+/, "Please enter a valid email address."],
        unique: true
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;