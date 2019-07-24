const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

router.post('/', async (req, res) => {
    // Validate all of the body data.
    // const errors = validationResult(req);
    // console.log(errors);
    let user = await User.findOne({ $or: [ { username: req.body.username }, { email: req.body.email }]});
    if(user) {
        res.sendStatus(409);
        console.log("User already exists.");
        console.log(user);
    }
    else {
        let user = await (new User(req.body)).save(); // Need to hash user's passwords, then we're good.
        console.log("User Saved.");
        console.log(user);
    }

});

module.exports = router;