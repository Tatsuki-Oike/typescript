// 型引数
class User1<arg> {
    id: arg;
    name: string;

    constructor(id: arg, name: string) {
        this.id = id,
        this.name = name
    }
}

console.log("\n型引数")

const user11 = new User1<number>(0, "Tatsuki")
console.log("user11.id:", user11.id)
console.log("user11.name:", user11.name)

const user12 = new User1<string>("000", "Tatsuki")
console.log("user12.id:", user12.id)
console.log("user12.name:", user12.name)


// クラスの型注釈
class User2 {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }
}

const user21: User2 = new User2(0, "Tatsuki")
const user22: User2 = {
    id: 1,
    name: "Akira"
}
console.log("\nクラスの型注釈")
console.log("user21.id:", user21.id)
console.log("user22.id:", user22.id)


// クラスの型
type UserType = {
    new (id: number, name: string): User2;
}
const user23: UserType = User2;
const user24: User2 = new user23(0, "Tatsuki");
console.log("\nクラスの型")
console.log("user24.id:", user24.id)


// instanceof
class User3 {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }
}

const user31: User3 = new User3(0, "Tatsuki")
const user32: User3 = {
    id: 1,
    name: "Akira"
}
console.log("\ninstanceof")
console.log("user31.id:", user31.id)
console.log("user32.id:", user32.id)
console.log(user31 instanceof User3)
console.log(user32 instanceof User3)
console.log()