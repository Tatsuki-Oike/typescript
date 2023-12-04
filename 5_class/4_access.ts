// privateとpublic
class User1 {
    public id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    intro(): string {
        return `My name is ${this.name}`
    }
}

const user1 = new User1(0, "Tatsuki")
console.log("\nprivateとpublic")
console.log("user1.id:", user1.id)
// console.log(user1.name)
console.log("user1.intro():", user1.intro())


// #によるプライベートプロパティ
class User2 {
    id: number;
    #name: string;

    constructor(id: number, name: string) {
        this.id = id,
        this.#name = name
    }

    intro(): string {
        return `My name is ${this.#name}`
    }
}

const user2 = new User2(0, "Tatsuki")
console.log("\n#によるプライベートプロパティ")
console.log("user2.id:", user2.id)
// console.log(user2.#name)
console.log("user2.intro():", user2.intro())


// #とprivateの継承
class User3 {
    private id: number = 0;
    #name: string = "Tatsuki";    

    intro(): string {
        return `My name is ${this.#name}`
    }
}

class User3Child extends User3{
    // private id = 0;
    #name = "Akira"

    intro1(): string {
        return `My name is ${this.#name}`
    }
}

const user3 = new User3Child()
console.log("\n#とprivateの継承")
console.log("user3:", user3)
console.log("user3.intro():", user3.intro())
console.log("user3.intro1():", user3.intro1())


// protected
class User4 {
    private id: number = 0;
    protected name: string = "Tatsuki";
}

class User4Child extends User4{
    
    intro(): string {
        return `My name is ${this.name}`
        // return `My name is ${this.id}`
    }
}

const user4 = new User4Child()
console.log("\nprotected")
console.log("user4:", user4)
console.log("user4.intro():", user4.intro())
console.log()