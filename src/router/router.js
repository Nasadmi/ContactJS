const express = require('express');

const router = express.Router();

const config = require('../env/config.js');

config()

const title = process.env.WEBPAGE_TITLE

const routesNav = [
  { name: 'Home', url: '/' },
  { name: 'Login', url: '/login' },
  { name: 'Register', url: '/register' },
  { name: 'About', url: '/about' },
  { name: 'Contacts', url: '/contacts' }
]

router.get('/', (req, res, next) => {
    res.render('index', {
      title: title,
      nav: routesNav
    });
});

router.get('/login', (req, res, next) => {
    res.render('login', {
      title: title,
      nav: routesNav
    });
});

router.get('/register', (req, res, next) => {
    res.render('register', {
      title: title,
      nav: routesNav
    });
});

router.get('/about', (req, res, next) => {
    res.render('about', {
      title: title,
      nav: routesNav
    });
});

router.get('/contacts', (req, res, next) => {
    res.render('contact', {
      title: title,
      nav: routesNav
    });
});

module.exports = router;