let score: number | string = 33

score = "990inu"

type User = {
  name: string;
  id: number
}

type Admin = {
  username: string;
  id: number
}

let Narasimha: User | Admin = {name: "Narasimha", id: 9876}

Narasimha = {username:"PLN", id:554}

function getDbId(id: number | string){
  console.log(`DB id is ${id}`)
}

getDbId(8)
getDbId("Hello Guruva!")

const data: number[] = [1,2,3,4,5]
const data1: string[] = ["10","2"]
const data3: (string | number | boolean)[] = ["1","2",3,true]
const data4: any[] = ["1","2",3,true]

let pi:3.14 = 3.14

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"

