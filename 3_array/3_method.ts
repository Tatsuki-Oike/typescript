// 配列要素の追加と削除
const arr = [1, 2, 3];
console.log("\n配列要素の追加と消去")
arr.push(4); // [1, 2, 3, 4]
console.log("arr.push(4):", arr)
arr.pop();   // [1, 2, 3]
console.log("arr.pop()", arr)
arr.unshift(0); // [0, 1, 2, 3]
console.log("arr.unshift(0):", arr)
arr.shift();   // [1, 2, 3]
console.log("arr.shift():", arr)

// slice
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
console.log("\nslice")
console.log("fruits.slice(1, 3)", fruits.slice(1, 3))
console.log("fruits.slice(2)", fruits.slice(2))
console.log("fruits.slice(-2)", fruits.slice(-2))
console.log("fruits.slice(1, -1)", fruits.slice(1, -1))

// 文字に結合
console.log("\n文字に結合")
console.log("arr.join(', '):", fruits.join(', '), typeof fruits.join(', '));
console.log()