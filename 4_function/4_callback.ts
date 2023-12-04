// コールバック関数
function doSomething(callback) {
    console.log("Task completed.");
    callback();
}

function onComplete() {
    console.log("All tasks are done.");
}

console.log("\ndoSomething(callback)")
doSomething(onComplete);


// map: 各要素、新しい配列
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log("\nnumbers.map()")
console.log(squaredNumbers)
// squaredNumbers: [1, 4, 9, 16, 25]


// forEach: 各要素、新しい配列は作成しない
const squaredNumbers2: number[] = [];
numbers.forEach(function(num) {
    squaredNumbers2.push(num * num);
});
console.log("\nnumbers.forEach()")
console.log(squaredNumbers2);
// squaredNumbers2: [1, 4, 9, 16, 25]


// filter: 指定した条件に合う新しい配列 or []
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("\nnumbers.filter()")
console.log(evenNumbers)
// evenNumbers: [2, 4]


// find: 指定した条件の一番最初 or undefined
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const youngPerson = people.find(function(person) {
    return person.age < 30;
});
console.log("\npeople.find()")
console.log(youngPerson)
// youngPerson: { name: 'Bob', age: 25 }


// reduce 各要素順番、単一の値
const sum = numbers.reduce(function(accumulator, num) {
    return accumulator + num;
}, 0);
console.log("\nnumbers.reduce()")
console.log(sum)
// sum: 15
console.log()