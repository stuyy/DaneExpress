const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const localstrat = require('./config/LocalStrat');

const PORT = 3001 || process.env.PORT;

mongoose.connect('mongodb://localhost:27017/daneexpressdb', {useNewUrlParser: true});

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(session({
    secret: 'keyboard',
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 60000 * 30
    }
}))

app.use(passport.initialize());
app.use(passport.session());

const register = require('./routes/register');
const auth = require('./routes/auth');

app.use('/register', register); // Route for registering.
app.use('/auth', auth);

// Later we will set up HTTPS server.
app.listen(PORT, console.log("http://localhost:3001")); 