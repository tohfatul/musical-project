const myMusic = require('../models/myMusic');

exports.save=(req, res, next)=>{
    

    let obj = req.body;
    if(obj.user === null){
        res.status(403).json('Not authenticated');
    }
    let newAddedMusic = new myMusic(obj.id, obj.title, obj.user, obj.audioLink).save();
    res.status(200).json(newAddedMusic);

    
}

exports.getMusics=(req, res, next)=>{
   
    if(req.params.user === null){
        res.status(403).json('Not authenticated');
    }

    console.log(req.params.user);
    res.status(200).json(myMusic.getMusics(req.params.user));
}

exports.removeMusic=(req, res, next)=>{
    if(req.body.user === null){
        res.status(403).json('Not authenticated');
    }
    res.status(200).json(myMusic.remove(req.body.id));
}

