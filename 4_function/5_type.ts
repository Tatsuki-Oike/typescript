// 関数の型
type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;
console.log("\nadd(3, 5):", add(3, 5));

// ジェネリクス
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log("firstNumber:", firstNumber);

const fruits = ["apple", "banana", "cherry"];
const firstFruit = getFirstElement(fruits);
console.log("firstFruit:", firstFruit);
console.log()