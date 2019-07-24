const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

router.post('/', async (req, res) => {
    // Validate all of the body data.
    // const errors = validationResult(req);
    // console.log(errors);
    try {
        let user = await User.findOne({ $or: [ { username: req.body.username }, { email: req.body.email }]});
        if(user)
            res.sendStatus(409);
        else {
            let user = new User(req.body);
            user.password = await user.encryptPassword(user.password);
            await user.save();
            console.log("Saved User.");
            // Once they're registered, we will redirect to the login route and log them in.
        }
    }
    catch(err) {
        console.log(err);
    }

});

module.exports = router;