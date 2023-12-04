import axios from "axios"

console.log("\nconsole1")
const p5 = axios.get("http://127.0.0.1:5000")
console.log("p5:", p5)
p5.then((result) => {
    console.log("console3")
    console.log(result)
    console.log()
})
p5.catch((error) => {
    console.log("console3")
    console.log(error)
})
console.log("console2")