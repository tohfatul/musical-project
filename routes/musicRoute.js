const express = require('express');
const musicController = require('../controllers/musicController');

const router = express.Router();

router.get('/', musicController.getMusics);

//router.get('/musics/:musicId', musicController.getMusicById);

router.post('/', musicController.save);



module.exports = router;