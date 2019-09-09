const router = require('express').Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('yo');
    console.log(req.user);
    res.sendStatus(200);
});

module.exports = router;