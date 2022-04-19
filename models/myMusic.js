
let myMusics=[{id:1, title:'hey', user:'xyz'}];

module.exports = class MyMusic{
    constructor(id, title, user){
        this.id=id;
        this.title=title;
        this.user=user;
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
}