var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {
      title: 'home'
    });
  })
  .get('/netPositionSummary', function (req, res, next) {
    res.render('netPositionSummary', {
      title: 'Net Position Summary'
    })
  })
  .get("/priceAlarm", function (req, res, next) {
    res.render('priceAlarm', {
      title: 'priceAlarm'
    })
  })
  .get('/monitor', function (req, res, next) {
    res.render('monitor', {
      title: "monitor"
    })
  })
  .get('/lockPositionAlarm', function (req, res, next) {
    res.render('lockPositionAlarm', {
      title: 'lockPositionAlarm'
    })
  })
 .get('/partialLockRisk', function (req, res, next) {
    res.render('partialLockRisk', {
      title: 'partialLockRisk'
    })
  })
  .get('/marginControl', function (req, res, next) {
    res.render('marginControl', {
      title: 'marginControl'
    })
  })
  .get('/riskManagement', function (req, res, next) {
    res.render('riskManagement', {
      title: 'riskManagement'
    })
  })
  .get('/capitalStatement', function (req, res, next) {
    res.render('capitalStatement', {
      title: 'capitalStatement'
    })
  })
  .get('/transactionAnalysis', function (req, res, next) {
    res.render('transactionAnalysis', {
      title: 'transactionAnalysis'
    })
  })
module.exports = router;