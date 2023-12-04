// オプショナル引数
const removeF = (num: number[], flg?: boolean) => {
    if (flg) {
        console.log("if", flg)
        num.pop()
        return num
    } else {
        console.log("else", flg)
        num.shift()
        return num
    }
 }

const array2 = [1, 2, 3, 4, 5]
console.log("\nオプショナル引数")
console.log("flg?: boolean")
console.log("removeF(array2):", removeF(array2))
console.log("removeF(array2, false):", removeF(array2, false)) 
console.log("removeF(array2, true):", removeF(array2, true))

// デフォルト引数
const removeF2 = (num: number[], flg: boolean = false) => {
    if (flg) {
        console.log("if", flg)
        num.pop()
        return num
    } else {
        console.log("else", flg)
        num.shift()
        return num
    }
 }

const array3 = [1, 2, 3, 4, 5]
console.log("\nデフォルト引数")
console.log("flg: boolean = false")
console.log("removeF2(array2):", removeF2(array3))
console.log("removeF2(array2, false):", removeF2(array3, false)) 
console.log("removeF2(array2, true):", removeF2(array3, true))


// 可変長引数
const add1 = (...args: number[]): number => {

    console.log(args)

    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log("\n可変長引数")
console.log("...args: number[]")
add1(1, 2, 3, 4)

// 配列で引数の受け渡し
const array1 = [1, 2, 3, 4]
console.log("add1(...array1)")
add1(...array1)

// 可変長引数2
const add2 = (arg1: number, arg2: number, ...args: number[]): number => {
    console.log(arg1, arg2, args);
    
    let sum = arg1 + arg2;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log("\n可変長引数2")
console.log("add2 = (arg1: number, arg2: number, ...args: number[]): number =>")
add2(1, 2, 3, 4)


// オブジェクトの引数
type User = {
    id: number;
    name: string;
}
const func1 = (user: User): string => {
    return `id(${user.id}): 名前は、${user.name}`
}

const user1: User = {
    id: 1,
    name: "Tatsuki"
}
console.log("\nオブジェクトの引数")
console.log("func1 = (user: User): string =>")
console.log(func1(user1))


// 分割代入
const func2 = ({id, name}): string => {
    return `id(${id}): 名前は、${name}`
}

console.log("\n分割代入")
console.log("func2 = ({id, name}): string =>")
console.log(func2(user1))
console.log()