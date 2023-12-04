import {id, name, age, arr, obj, sqare, ObjType} from "./module.js";

console.log("\nmodule1/index.ts")
console.log(`id, name, age = ${id}, ${name}, ${age}`)
console.log("arr:", arr)
console.log("obj:", obj)
console.log("sqare(2) =", sqare(2))

const obj2: ObjType = {
    key1: "value1",
    key2: 10
};
console.log("obj2:", obj2)
console.log()