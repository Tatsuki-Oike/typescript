// obj
const obj1 = {
    key1: "value1",
    key2: 10
};

const key1 = "value1";
const obj2 = {
    key1,
    key2: 10
};

const keyName = "key1";
const obj3 = {
    [keyName]: "value1",
    key2: 10
};

const smallObj = {
    "key1": "value1"
};
const obj4 = {
    ...smallObj,
    "key2": 10
};

console.log()
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj3:", obj3);
console.log("obj4:", obj4);
console.log()