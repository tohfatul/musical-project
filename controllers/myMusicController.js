const myMusic = require('../models/myMusic');

exports.save=(req, res, next)=>{
    let obj = req.body;
    let newAddedMusic = new myMusic(obj.id, obj.title, obj.user).save();
    res.status(200).json(newAddedMusic);
}

exports.getMusics=(req, res, next)=>{
    res.status(200).json(myMusic.getMusics());
}