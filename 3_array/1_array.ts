// array
const array1 = ["Taro", "Jiro", "Goro"]
const array2: string[] = ["Taro", "Jiro", "Goro"]
const array3: number[] = [10, 2, 4]
const array4: (boolean | number)[] = [false, 2, true]
const array5: Array<number> = [10, 2, 4]

console.log()
console.log("array")
console.log("array4:", array4)
console.log("array4[0]:", array4[0])
console.log("array4[1]:", array4[1])
console.log("array4[2]:", array4[2])
console.log("array4[3]:", array4[3])

array4[2] = 100
console.log("array4:", array4)


// readonly
const array6: readonly number[] = [10, 2, 4]
// array6[0] = 3 実行不可


// array obj
const array7: Array<{
    id: number;
    name: string;
}> = [
    {id: 1, name: "Taro"},
    {id: 2, name: "Jiro"},
]


// スプレッド構文
const array8: number[] = [3, 4]
const array9: number[] = [1, 2, ...array8]
console.log("\nスプレッド構文")
console.log("array9", array9)


// tuple
const tuple1: [string, boolean] = ["Taro", true]
const tuple2: [name: string, flg: boolean] = ["Taro", true]
// tuple1[3] 実行不可


// for文
console.log("\nfor文")
for (let item of array1) {
    console.log(item);
}
console.log()