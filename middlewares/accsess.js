const { usersModel } = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateSignUp, validateSignIn } = require("../validation/user-accsess");

const signUp = async (req, res) => {
    const { isValid, errors } = validateSignUp(req.body.data);
    if (!isValid) return res.status(400).json(errors);
    usersModel.findOne({ email: req.body.data.email }, (err, user) => {
        if (err) return res.status(400).json(err);
        if (user) return res.json({ massage: "email already taken" });
        bcrypt
            .genSalt()
            .then((salt) => {
                bcrypt
                    .hash(req.body.data.password, salt)
                    .then(async (hashPassword) => {
                        req.body.data.password = hashPassword;
                        await usersModel
                            .insertMany(req.body.data)
                            .then(() => res.json({ massage: "success" }))
                            .catch((err) => res.json(err));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    });
};


const signIn = async (req, res) => {
    const { isValid, errors } = validateSignIn(req.body.data);
    if (!isValid) return res.status(400).json(errors);
    const email = req.body.data.email;
    const password = req.body.data.password;
    await usersModel.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(404).json({ message: "email not found" });
        }
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.firstName,
                    email: user.email,
                };
                jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3h" }, (err, token) => {
                    if (err) return res.status(400).json({ err, message: false });
                    res.json({ success: true, token: token ,user});
                });
            } else {
                return res
                    .status(400)
                    .json({ message: "password incorrect" });
            }
        });
    });
};


module.exports = { signUp, signIn };