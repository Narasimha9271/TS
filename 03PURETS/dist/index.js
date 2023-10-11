"use strict";
// class User {
//   public email: string
//   name: string
//   private readonly city: string = ""
//   constructor(email: string, name: string){
//     this.email = email;
//     this.name = name;
//   }
// }
// const nani = new User( "n@n.com","nani");
// //nani.city = "Proddatur"
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
    }
    //private Methods
    deleteToken() {
        console.log("Token Deleted");
    }
    //getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const nani = new User("n@n.com", "nani");
//nani.city = "Proddatur"
// nani.deleteToken()
