// Primitive
const n1: number = 3;
const s1_1: string = "Hello1";
const s1_2: string = 'Hello2';
const s1_3: string = `Hello3 ${s1_1}`;
const flg1: boolean = true;
const bi1: bigint = 1000n;
const val1_1: null = null;
const val1_2: undefined = undefined;

console.log("\nPrimitive")
console.log(typeof n1, n1);
console.log(typeof s1_1, s1_1);
console.log(typeof s1_2, s1_2);
console.log(typeof s1_3, s1_3);
console.log(typeof flg1, flg1);
console.log(typeof bi1, bi1);
console.log(typeof val1_1, val1_1);
console.log(typeof val1_2, val1_2);

const n2 = 3;
const s2_1 = "Hello1";
const s2_2 = 'Hello2';
const s2_3 = `Hello3 ${s2_1}`;
const flg2 = true;
const bi2 = 1000n;
const val2_1 = null;
const val2_2 = undefined;


// 型の変換
const s3: string = "10"
const n3: number = Number(s3)
const flg3: boolean = Boolean(s3);
const bi3: bigint = BigInt(s3)

console.log("\nChange")
console.log(typeof n3, n3)
console.log(typeof flg3, flg3)
console.log(typeof bi3, bi3)
console.log()