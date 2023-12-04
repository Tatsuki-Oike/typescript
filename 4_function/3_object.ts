// オブジェクトにメソッドを定義
const numObj = {
    num: 9,
    sqare: function() {
        return this.num **2
    },
    double: () => numObj.num * 2,
    sqrt(){
        return this.num ** 0.5
    }

};

// メソッドを呼び出し
console.log()
console.log("numObj.num:", numObj.num)
console.log("numObj.sqare():", numObj.sqare())
console.log("numObj.double():", numObj.double())
console.log("numObj.sqrt():", numObj.sqrt())
console.log()