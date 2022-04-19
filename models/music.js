
let musics=[];

module.exports = class Music{
    constructor(id, title, releasedate){
        this.id=id;
        this.title=title;
        this.releasedate=releasedate;
    }

    save(){
        musics.push(this);
    }


    static getMusics(){
        return musics;
    }
}