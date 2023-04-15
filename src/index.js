const express = require('express');

const session = require('express-session');

const path = require('path');

const config = require('./env/config.js');

const db = require('../database/db.js');

const app = express();

config()

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT)

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`)
})

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database', process.env.DB_NAME);
})