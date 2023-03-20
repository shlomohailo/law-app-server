const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const key = process.env.SECRET_KEY;
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        console.log("test");
        console.log(token);
        const decoded = jwt.verify(token, key);
        console.log(decoded);
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};