
let musics=[];
let serachedItems=[];

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

    static search(searchKey){
        serachedItems=[];
       for(let i=0; i<musics.length; i++){
            let res = musics[i].title.includes(searchKey);
            if (res) {
                serachedItems.push(musics[i]);
            }
       }
       return serachedItems;
    }
}