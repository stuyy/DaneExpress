const LocalStrategy = require('passport-local');
const passport = require('passport');
const User = require('../models/User');

passport.serializeUser(function(user, done) {
    done(null, user.id);    
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ username: username });
    var result;
    if(user)
    {   
        result = await user.comparePassword(password, user.password);
        if(result)
        {
            console.log("passwords matched.");
            return done(null, user);
        }
        else
        {
            console.log("Passwords did not match.");
            return done(null, false);
        }
    } else
    {
        console.log("Could not find user.");
        return done(null, false);
    }
})); 