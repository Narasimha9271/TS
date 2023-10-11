//Tuple -> A type of an array of known length abd where diff lements may have diff types
let tuser: [string, number, boolean]

//order of elements in a tuple matters
tuser = ["Pln", 4, true]

let rgb: [number, number, number] = [255,123,112]

type User = [number, string]

const newUser: User = [112, "n@gmail.com"]

newUser[1] = "pln@gmail.com"
// newUser.push(true)



export {}