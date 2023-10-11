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

  protected _courseCount = 1
  
  readonly city: string = ""
  constructor(
    public email: string,
    public name: string){
  }

  //private Methods
  private deleteToken(){
    console.log("Token Deleted")
  }

  //getter
  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  //setter
  set courseCount(courseNum) {
    if(courseNum <= 1){
      throw new Error("Course count should be greater than 1")
    }
    this._courseCount = courseNum
  }


}

class subUser extends User{
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}

const nani = new User( "n@n.com","nani");
//nani.city = "Proddatur"

// nani.deleteToken()