var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/formData', function(req, res, next) {
  console.log(req.body);
  res.status(200).redirect('/');
});

module.exports = router;
