const score: Array<number> = []

const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
  return val
}

function identityTwo(val: any): any{
  return val
}

function identityThree<Type>(val: Type): Type{
  return val
}

function identityFour<T>(val: T): T{
  return val
}

interface Bottle{
  brand: string,
  type: number
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIdx = 3
  return products[myIdx]
}

//Arrow functions
// const getMoreSearchProducts = () => {} in JS
// const getMoreSearchProducts = (): => {} in TS
// const getMoreSearchProducts = <T>(): => {} in TS in Generics
const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIdx = 8
  return products[myIdx]
}

const getMoreMoreSearchProducts = <T, >(products: T[]): T => {
  //do some database operations
  const myIdx = 2
  return products[myIdx]
}

function anotherFun<T, U>(val1:T, val2:U): object{
  return {
    val1,
    val2
  }
}

anotherFun(33,"8")


function anotherFunn<T, U extends number>(val1:T, val2:U): object{
  return {
    val1,
    val2
  }
}

// anotherFunn(33,"8")

interface DataBase{
  connection: string,
  username: string,
  password: string
}

function anotherFunnn<T, U extends DataBase>(val1:T, val2:U): object{
  return {
    val1,
    val2
  }
}

// anotherFunn(33,{"a","b","c"})

interface Quiz{
  name: string,
  type: string
}

interface Course{
  name: string,
  author: string,
  subject: string
}

class Sellable<T>{
  public cart: T[] = []

  addToCart(product: T){
    this.cart.push(product)
  }
}
