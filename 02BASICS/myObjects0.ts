const User = {
  name: "Narasimha",
  email: "n@co.dev",
  isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name:"nani", isPaid: false,email: "n@.co.dev"}
createUser(newUser)

function createCourse():{name: string, price: number}{
  return {name:"React", price:999999}
}

export {}