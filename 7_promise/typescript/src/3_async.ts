import {delayHelloWorld} from "./func.js"


async function main() {
    try {
        console.log("\nconsole1")
        const p3 = delayHelloWorld()
        console.log("p3:", p3)
        p3.then((result) => {
            console.log("console4")
            console.log(result)
            console.log()
        })
        console.log("console2")
    } catch (error) {
        console.error("エラー:", error);
    }
}

main();