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
module.exports = router;