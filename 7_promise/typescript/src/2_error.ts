import {delayHelloWorld} from "./func.js"

console.log("\nconsole1")
const p2 = delayHelloWorld(3, true)
console.log("p2:", p2)
p2.then((result) => {
    console.log("console4")
    console.log(result)
})
p2.catch((error) => {
    console.log("console4")
    console.log(error)
})
console.log("console2")