const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: true}));


// Global Variables
// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/kdrama.routes'));
// Static Files



module.exports = app;