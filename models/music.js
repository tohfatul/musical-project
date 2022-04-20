
let musics=[];

module.exports = class Music{
    constructor(id, title, releasedate, audioLink){
        this.id=id;
        this.title=title;
        this.releasedate=releasedate;
        this.audioLink=audioLink;
    }

    save(){
        musics.push(this);
    }


    static getMusics(){
        return musics;
    }
}