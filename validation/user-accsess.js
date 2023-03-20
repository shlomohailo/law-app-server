const validator = require('validator');
const isEmpty = require('is-empty');

const validateSignUp = (user) => {
    errors = {};
    user.firstName = isEmpty(user.firstName) ? "" : user.firstName;
    user.lastName = isEmpty(user.lastName) ? "" : user.lastName;
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;
    user.passwordConfirm = isEmpty(user.confirmPassword) ? "" : user.confirmPassword;

    if (validator.isEmpty(user.firstName)) errors.firstName = "first Name Is required";
    if (validator.isEmpty(user.lastName)) errors.lastName = "last Name Is required";
    if (validator.isEmpty(user.email)) errors.email = "email Is required";
    if(!validator.isEmail(user.email)) errors.email = "email Is not valid";
    if (validator.isEmpty(user.password)) errors.password = "password Is required";
    if (!validator.equals(user.password, user.confirmPassword)) errors.confirmPassword= "passwords not match"
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
const validateSignIn = (user) => {
    errors = {};
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;

    if (validator.isEmpty(user.email)) errors.message = "email Is required";
    if(!validator.isEmail(user.email)) errors.message = "email Is not valid";
    if (validator.isEmpty(user.password)) errors.message = "password Is required";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = { validateSignUp,validateSignIn }