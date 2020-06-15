const userCred = require('./index');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

// console.log(userCred)

module.exports = function (passport){
    passport.use(
        new localStrategy((email ,password, done) => {
            userCred.findOne({email: email}, (err, userCred) => {
                if(err) throw err;
                if(!userCred) return done(null, false);
                bcrypt.compare(password, userCred.password, (err, result) => {
                    if(err) throw err;
                    if(result === true) {
                        return done(null, userCred)
                    } else {
                        return done(null, false)
                    }
                })
            })
        })
    );

    passport.serializeUser ((userCred, cb) => {
        cb(null, userCred.id);
    })
    passport.deserializeUser((id, cb) =>{
        userCred.findOne({_id: id}, (err, userCred) => {
            cb(err, userCred);
        })
    })
}