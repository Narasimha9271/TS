function addThree(num: number): number{
  return num + 3;
}

let loginUser = (name: string, email: string, isPaid: boolean = false) =>{}

function getVal(myVal: number): boolean | string{
  if(myVal > 5){
    return true;
  }
  return "200 OK"
}

// Arrow Functions
const getHello = (s:string):string => {
  return ""
}

const heros = ["kawaki","Naruto","Boruto"]

heros.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
  console.log(errmsg);
}

function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

addThree(3);
loginUser("Narasimha","n@.com")


export {}