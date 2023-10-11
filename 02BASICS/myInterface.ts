// type User1 = {
//   email: string,
//   userId: number
// }
interface User {
  readonly dbId: number
  email: string,
  userId: number,
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): 
  number
}

interface User {
  githubToken: string
}

interface Admin extends User{
  role: "admin" | "ta" | "learner"
}

const nani: Admin = {dbId: 23,
email:"kljdlsk", 
userId: 34564,
role: "admin",
githubToken: "github",
startTrail: () => {
  return "Trail started"
},
getCoupon:(name: "narasimha", off: 10) => {
  return 10
},
} 

nani.email = "n@n.com"
// nani.dbId = 98