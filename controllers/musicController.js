const Music = require('../models/music');

exports.save=(req, res, next)=>{
    let obj = req.body;
    let newAddedMusic = new Music(obj.id, obj.title, obj.releasedate, obj.audioLink).save();
    res.status(200).json(newAddedMusic);
}

exports.getMusics=(req, res, next)=>{
    res.status(200).json(Music.getMusics());
}