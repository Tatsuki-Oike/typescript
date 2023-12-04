// 型引数
type ObjType1<ArgType> = {
    key1: ArgType;
};
const obj1_1: ObjType1<string> = {
    key1: "value1"
};
const obj1_2: ObjType1<number> = {
    key1: 10
};

// 型引数2つ
type ObjType2<ArgType1, ArgType2> = {
    key1: ArgType1;
    key2: ArgType1;
    key3: ArgType2;
};
const obj2: ObjType2<string, number> = {
    key1: "value1",
    key2: "value2",
    key3: 100
};

// オプショナルな型引数
type Default1 = string;
type Default2 = {
    key0: number;
};
type ObjType3<ArgType1=Default1, ArgType2=Default2> = {
    key1: ArgType1;
    key2: ArgType1;
    key3: ArgType2;
};
const obj3: ObjType3 = {
    key1: "value1",
    key2: "value2",
    key3: {
        key0: 10
    }
};