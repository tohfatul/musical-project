const express = require('express');
const myMusicController = require('../controllers/myMusicController');

const router = express.Router();

router.get('/', myMusicController.getMusics);

//router.get('/musics/:musicId', musicController.getMusicById);

router.post('/', myMusicController.save);



module.exports = router;