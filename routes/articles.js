var express = require('express');
var router = express.Router();
var authChecker = require('./authChecker');

router.get('/', function(req, res, next) {
  res.render('articles/index', {title: 'All Articles'})
});

router.get('/:anyroute/*', authChecker.userBouncer);

router.get('/recent', function(req, res, next) {
  res.render('articles/index', {title: 'Recent Articles'})
});

router.get('/most-popular', function(req, res, next) {
  res.render('articles/index', {title: 'Most Popular Articles'})
});

module.exports = router;
