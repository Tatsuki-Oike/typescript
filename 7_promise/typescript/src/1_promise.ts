import {delayHelloWorld} from "./func.js"

console.log("\nconsole1")
const p1 = delayHelloWorld()
console.log("p1:", p1)
p1.then((result) => {
    console.log("console4")
    console.log(result)
    console.log()
})
console.log("console2")
console.log()