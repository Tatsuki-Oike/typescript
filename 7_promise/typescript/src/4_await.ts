import {delayHelloWorld} from "./func.js"

async function main() {
    try {
        console.log("\nconsole1")
        const p4 = await delayHelloWorld(2)
        console.log("p4:", p4)
        console.log("console3")
        console.log()
    } catch (error) {
        console.error(error);
    }
}

main();