const { secretKey } = require("../config/keys")
const usersModel = require("../models/users")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const options = {
    secretOrKey: secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}
const passportMiddleware = (passport) => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            usersModel.findById(jwt_payload.id)
                .then((user) => {
                    console.log(`user found: ${user}`);
                    return done(null, false)
                })
                .catch(err => {
                    console.log(err);
                    return done(err, false)
                })
        })
    )
}

module.exports = passportMiddleware