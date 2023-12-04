console.log("\n関数の基礎")

// 関数宣言
function add1(a: number, b: number): number {
    const c = a+b;
    return c
}

console.log("add1(2, 3):", add1(2, 3))

// 返り値がない関数
function add2(a: number, b: number): void {
    const c = a+b;
    console.log(c)
}

console.log("add2(2, 3):")
add2(2, 3)

// 関数式
const add3 = function(a: number, b:number): number {
    const c = a + b;
    return c;
}

console.log("add3(2, 3):", add3(2, 3))

// アロー関数式
const add4 = (a: number, b:number): number => {
    const c = a + b;
    return c;
}

console.log("add4(2, 3):", add4(2, 3))

// アロー関数式 (省略)
const add5 = (a: number, b:number): number => a + b;

console.log("add5(2, 3):", add5(2, 3))
console.log()