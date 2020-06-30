const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// CORS
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');   

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE');
        res.send();
    });
});*/

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
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