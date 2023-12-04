// 二項演算子
console.log("\n二項演算子");
console.log("6 + 2 =", 6 + 2);
console.log("6 - 2 =", 6 - 2);
console.log("6 * 2 =", 6 * 2);
console.log("6 / 2 =", 6 / 2);
console.log("6 % 2 =", 6 % 2);
console.log("6 ** 2 =", 6 ** 2);

console.log('"a" + "b" = ', "a" + "b");
console.log("6n ** 2n = ", 6n ** 2n);


// 単項演算子
let n = 3;
console.log("\n単項演算子");
console.log("+n =", +n);
console.log("-n =", -n);
++n;
console.log("++n =", n);
--n;
console.log("--n =", n);
n++;
console.log("n++ =", n);
n--;
console.log("n-- =", n);


// 比較演算子と等価演算子
const a: number = 10;
const b: number = 15;
console.log("\n比較演算子と等価演算子");
console.log(`a = ${a}, b = ${b}`)
console.log("a < b:", a < b);
console.log("a > b:", a > b);
console.log("a <= b:", a <= b);
console.log("a >= b:", a >= b);
console.log("a === b:", a === b)
console.log("a !== b:", a !== b)


// 論理演算子と条件演算子
const t: boolean = true;
const f: boolean = false;
console.log("\n論理演算子");

console.log(`t = ${t}, f = ${f}`)
console.log("t && t:", t && t);
console.log("t && f:", t && f);
console.log("f && f:", f && f);

console.log("\nt || t:", t || t);
console.log("t || f:", t || f);
console.log("f || f:", f || f);

const x: string = "Taro";
const y: string = "";
const z: undefined = undefined;
console.log("\nx =", x);
console.log("!x =", !x);
console.log("!!x =", !!x);

console.log(`\nx = ${x}, y = ${y}, z = ${z}`);
console.log('x || "noname:"', x || "noname");
console.log('y || "noname:"', y || "noname");
console.log('z || "noname:"', z || "noname");
console.log('x ?? "noname:"', x ?? "noname");
console.log('y ?? "noname:"', y ?? "noname");
console.log('z ?? "noname:"', z ?? "noname");

console.log('\nt ? "SUCCESS" : "FAIL" =', t ? "SUCCESS" : "FAIL");
console.log('f ? "SUCCESS" : "FAIL" =', f ? "SUCCESS" : "FAIL");


// 代入演算子
let c = 10;
console.log("\n代入演算子");
console.log("c =", c);
c += 100;
console.log("c += 100:", c);
c -= 100;
console.log("c -= 100:", c);
c *= 10;
console.log("c *= 10:", c);
c /= 2;
console.log("c /= 2:", c);
c **= 2;
console.log("c **= 2:", c);
console.log()