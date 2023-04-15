const express = require('express');

const router = express.Router();

const config = require('../env/config.js');

config()

const title = process.env.WEBPAGE_TITLE

router.get('/', (req, res, next) => {
    res.render('index', {
      title: title
    });
});

router.get('/login', (req, res, next) => {
    res.render('login', {
      title: title
    });
});

router.get('/register', (req, res, next) => {
    res.render('register', {
      title: title
    });
});

router.get('/about', (req, res, next) => {
    res.render('about', {
      title: title
    });
});

router.get('/contacts', (req, res, next) => {
    res.render('contact', {
      title: title
    });
});

module.exports = router;