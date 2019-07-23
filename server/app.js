const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());

const PORT = 3001 || process.env.PORT;

const register = require('./routes/register');
const auth = require('./routes/auth');

app.use('/register', register); // Route for registering.
app.use('/auth', auth);

// Later we will set up HTTPS server.
app.listen(PORT, console.log("http://localhost:3001")); 