
let myMusics=[];

module.exports = class MyMusic{
    constructor(id, title, user, audioLink){
        this.id=id;
        this.title=title;
        this.user=user;
        this.audioLink=audioLink;
    }

    save(){
        myMusics.push(this);
    }

    // static getMusics(user){
    //     return myMusics.filter(u=>u.user==user);
    // }

    static getMusics(){
        return myMusics;
    }

    static remove(id){
        const index = myMusics.findIndex((m) => m.id == id);
        if (index >= 0) {
          myMusics = myMusics.filter((m) => m.id != id);
          return myMusics;
        } else {
          throw new Error("Record not found.");
        }
    }
}