const Music = require('../models/music');

exports.save=(req, res, next)=>{
    let obj = req.body;
    let newAddedMusic = new Music(obj.id, obj.title, obj.releasedate).save();
    res.status(200).jason(newAddedMusic);
}