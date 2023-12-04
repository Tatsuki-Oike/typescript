export function delayHelloWorld(n: number = 3, isError: boolean = false): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        console.log(`console${n}`)
        if (isError) {
          reject(new Error("エラーが発生しました"));
        } else {
          resolve("Hello World");
        }
      }, 3000);
    });
  }