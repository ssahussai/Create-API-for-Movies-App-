var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

router.get('/movies', moviesCtrl.index);
router.post('/movies', moviesCtrl.create);
router.get('/movies/:id', moviesCtrl.show);
router.put('/movies/:id', moviesCtrl.update);
router.delete('/movies/:id', moviesCtrl.delete);

module.exports = router;