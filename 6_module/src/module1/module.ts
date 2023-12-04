// 値をexport
export const id = 0;

// 複数の値を同時にexport
const name = "Tatsuki";
const age = 24;
export {name, age}

// 配列
export const arr = [1, 2, 3]

// オブジェクトをexport
export const obj = {
    id: 0,
    name: "Tatsuki"
}

// 関数をexport
export const sqare = (x) => x ** 2

// typeをexport
export type ObjType = {
    key1: string;
    key2: number;
};