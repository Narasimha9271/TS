type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credCardDetails?: number
}

let myUser: User = {
  _id: "123456",
  name: "nani",
  email: "nani@gmail.com",
  isActive: false
}

myUser.email= "hiuhiu@.co"

export {}