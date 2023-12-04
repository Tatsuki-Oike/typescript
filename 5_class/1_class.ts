// クラスの宣言
class User1 {
    id: number = 0;
    readonly name: string = "Tatsuki";
}

const user1 = new User1()
console.log("\nクラスの宣言")
console.log("user1", user1)
console.log("user1.id", user1.id)
console.log("user1.name", user1.name)

user1.id = 1
console.log("user1.id", user1.id)


// クラス式で作成
const User2 = class {
    id: number = 0;
    readonly name: string = "Tatsuki";
}

const user2 = new User2()
console.log("\nクラス式で作成")
console.log("user2", user2)
console.log("user2.id", user2.id)
console.log("user2.name", user2.name)


// メソッド
class User3 {
    id: number = 0;
    name: string = "Tatsuki";

    intro(): string {
        return `My name is ${this.name}`
    }
}

const user3 = new User3()
console.log("メソッド")
console.log("user3.intro()", user3.intro())


// コンストラクタ
class User4 {
    id: number = 0;
    name: string = "Tatsuki";

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    intro(): string {
        return `My name is ${this.name}`
    }
}

const user4 = new User4(0, "Tatsuki")
console.log("\nコンストラクタ")
console.log("user4", user4)
console.log("user4.id", user4.id)
console.log("user4.name", user4.name)


// コンストラクタ2
class User5 {

    constructor(public id: number, public name: string) {}

    intro(): string {
        return `My name is ${this.name}`
    }
}

const user5 = new User5(0, "Tatsuki")
console.log("\nコンストラクタ2")
console.log("user5:", user5)
console.log("user5.id:", user5.id)
console.log("user5.name:", user5.name)
console.log("user5.intro():", user5.intro())


// 静的プロパティ・静的メソッド
class User6 {
    static userName: string = "Tatsuki";

    static intro(): string {
        return `My name is ${this.userName}`
    }
}

console.log("\n静的プロパティ・静的メソッド")
console.log("User6.userName", User6.userName)
console.log("User6.intro()", User6.intro())
console.log()