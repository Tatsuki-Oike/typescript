import axios from "axios"

async function main() {
    try {
        console.log("\nconsole1")
        const p6 = await axios.get("http://127.0.0.1:5000")
        console.log("p6:", p6)
        console.log("console2")
        console.log()
    } catch (error) {
        console.error(error);
    }
}

main();