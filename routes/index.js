var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/netPositionSummary',function(req,res,next){
  res.render('netPositionSummary',{title:'Net Position Summary'})
})
module.exports = router;
