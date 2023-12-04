// obj type
const obj1: {
    key1: string;
    key2: number;
} = {
    key1: "value1",
    key2: 10
};

// type
type ObjType2 = {
    key1: string;
    key2: number;
};
const obj2: ObjType2 = {
    key1: "value1",
    key2: 10
};

// interface
interface ObjType3 {
    key1: string;
    key2: number;
};
const obj3: ObjType3 = {
    key1: "value1",
    key2: 10
};

// インデックスシグネチャ
type ObjType4 = {
    [key: string]: string;
}
const obj4: ObjType4 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

// オプショナル
type  ObjType5 = {
    key1: string;
    key2: number;
    key3?: boolean;
}
const obj5_1: ObjType5 = {
    key1: "value1",
    key2: 10,
    key3: true
}
const obj5_2: ObjType5 = {
    key1: "value1",
    key2: 10
}

// readonly
type ObjType6 = {
    key1: string;
    readonly key2: number
}
const obj6: ObjType6 = {
    key1: "value1",
    key2: 10
}
console.log()
console.log("readonly")
console.log("obj6.key1:", obj6.key1)
console.log("obj6.key2:", obj6.key2)
obj6.key1 = "value1_1"
console.log("obj6.key1:", obj6.key1)
// obj6.key2 = "value1_2" 実行不可
console.log()