const axios = require('axios').default; //using npm package 'axios'
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
    res.send(response.data);
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.status(200).send();
});

module.exports = router;
