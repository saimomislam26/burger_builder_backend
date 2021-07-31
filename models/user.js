const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const label = "Password"
const userSchema = new Schema({
    email: {
        type: String,
        minlength: 5,
        maxlength: 100,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 4,
        maxlength: 1024,
        required: true
    }
})

//generate token after signup.
userSchema.methods.generateJWT = function () {
    const token = jwt.sign({ _id: this._id, email: this.email },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "3h"
        })
    return token;
}
const complexityOptions = {
    min: 4,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
};
const validateUser = (user) => {
    const schema = joi.object({
        email: joi.string().email().min(5).max(100).required(),
        password: joi.string().required().min(4).max(1024)
        //passwordComplexity(complexityOptions)

    })
    return schema.validate(user);
}

const User = model('user', userSchema);
module.exports.User = User;
module.exports.validate = validateUser;