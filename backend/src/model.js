const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Invalid Email");
            }
        }
    },

    password: {
        type: String,
        required: true

    },
    cpassword: {
        type: String,
        required: true
    }

});

const User = new mongoose.model("User", userSchema);

module.exports = User;