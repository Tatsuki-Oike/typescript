// if
console.log("\nif文");
const a: number = 3;

if (a === 3) console.log("if: a ===3");

if (a === 3) {
    console.log("if: a === 3");
}

if (a === 2) {
    console.log("if: a === 2");
} else {
    console.log("else: a !== 2");
}

if (a > 5) {
    console.log("if: a > 5");
} else if (a > 2) {
    console.log("else if: a > 2");
} else {
    console.log("else: a <= 2");
}

// swich
console.log("\nswich文");
const fruits: string = "banana";

switch (fruits) {
    case "apple":
        console.log("appleが好きなんですね");
        break;
    case "orange":
        console.log("orangeが好きなんですね");
        break;
    case "banana":
        console.log("bananaが好きなんですね");
        break;
    default:
        console.log("何が好き？");
}

// while
console.log("\nwhile文 (+=)");
let sum = 0;
while (sum < 3) {
    sum +=1;
    console.log(sum);
}

console.log("\while文 (nif break)");
let sum2 = 0;
while (true) {
    sum2 +=1;
    console.log(sum2)
    if (sum2 == 3) {
        break;
    }
}

// for
console.log("\nfor文")
for (let i: number = 0; i < 3; i++){
    console.log(i)
}

// try
console.log("\ntry文")
try {
    throw new Error("error message");
} catch (error) {
    console.error("Error:", error.message);
}

try {
    throw new Error("error message");
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("finally")
}

try {
    // 例外が発生する可能性のあるコード
    throw new TypeError("error message");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("SyntaxError:", error.message);// エラー処理1
    } else if (error instanceof TypeError) {
        console.error("TypeError:", error.message);
    } else if (error instanceof ReferenceError) {
        console.error("ReferenceError:", error.message);
    } else {
        console.error("Error:", error.message);
    }
}
console.log()