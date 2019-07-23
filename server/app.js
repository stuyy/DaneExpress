const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

const PORT = 3001 || process.env.PORT;

const register = require('./routes/register');
const auth = require('./routes/auth');

app.use('/register', register); // Route for registering.
app.use('/auth', auth);

// Later we will set up HTTPS server.
app.listen(PORT, console.log("http://localhost:3001")); 