// 親クラスの定義
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}

const animal1 = new Animal("Tama")
console.log("\n親クラスの定義")
console.log("animal1.name:", animal1.name)
console.log("animal1.makeSound()")
animal1.makeSound()


// クラスの継承
class Dog1 extends Animal {
    age: number = 7;
}
const dog1 = new Dog1("Taro")
console.log("\nクラスの継承")
console.log("dog1.name:", dog1.name)
console.log("dog1.age:", dog1.age)
console.log("dog1.makeSound()")
dog1.makeSound()


// メソッドのオーバーライド
class Dog2 extends Animal {
    age: number = 7;

    override makeSound() {
        console.log("Woof! Woof!")
    }
}
const dog2 = new Dog2("Taro")
console.log("\nメソッドのオーバーライド")
console.log("dog2.name:", dog2.name)
console.log("dog2.age:", dog2.age)
console.log("dog2.makeSound()")
dog2.makeSound()


// コンストラクタのオーバーライド
class Dog3 extends Animal {
    age: number;

    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }

    override makeSound() {
        console.log("Woof! Woof!")
    }
}
const dog3 = new Dog3("Taro", 7)
console.log("\nコンストラクタのオーバーライド")
console.log("dog3.name:", dog3.name)
console.log("dog3.age:", dog3.age)
console.log("dog3.makeSound()")
dog3.makeSound()
console.log()