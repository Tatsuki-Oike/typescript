// 分割代入 array
const array1: number[] = [1, 2, 3];

const [n1, n2] = array1;
const [n3, ...n4] = array1;
console.log("\narrayの分割代入")
console.log("n1, n2:", n1, n2);
console.log("n3, n4:", n3, n4);

// 分割代入 obj
const obj1 = {
    id: 1,
    userName: "Taro"
};

const { id, userName } = obj1;
const { id: userId, ...rest } = obj1;
console.log()
console.log("\nobjectの分割代入")
console.log("id, userName:", id, userName)
console.log("userId:", userId)
console.log("rest:", rest)
console.log()