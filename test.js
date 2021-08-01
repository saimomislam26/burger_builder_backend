const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const complexityOptions = {
    min: 4,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
};
const schema = joi.object({
    password: passwordComplexity(complexityOptions)
})
const user = {
    password: "Incorrect2ice"
}

const { error } = schema.validate(user)
if (error) console.log(error.details[0].message)
else console.log({ password: user.password })