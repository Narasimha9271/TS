//Narrowing
function detectType(val: number | string ){
  if(typeof val == "string"){
    return val.toLowerCase()
  }
  return val + 3
}

function provideId(id: string | null){
  if(!id){
    console.log("Please provide id")
    return
  }
  id.toLowerCase()
}

function printAll(strs: string | string[] | null){
  if(strs){
    if(typeof strs === "object"){//Array 's type is object
      for(const s of strs){
        console.log(s)
      }
    }else if (typeof strs === "string"){
      console.log(strs)
    }
  }
}

//in operator narrowing
interface User{
  name: string,
  email: string
}

interface Admin{
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdmin(account: User | Admin){
  if("isAdmin" in account){
    return account.isAdmin
  }
}

//instanceof narrowing
function logValue(x: Date | string){
  if(x instanceof Date){
    console.log(x.toUTCString())
  }else{
    console.log(x.toUpperCase())
  }
}

type Fish = {
  swim: () => void;
}
type Bird = {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return "Fish Food"
  }else {
    pet
    return "bird Food"
  }
}

//Discriminated Unions
interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square",
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
  if(shape.kind == "circle"){
    return Math.PI * shape.radius ** 2
  }
  if(shape.kind == "square"){
    return shape.side * shape.side
  }
  return shape.length * shape.width
}

function getArea(shape: Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side * shape.side

    case "rectangle":
      return shape.length * shape.width
    
    default:
      const _defaultforShape: never = shape
      return _defaultforShape
  }
}



