# 1 typescript環境構築

```sh
cd ./6_module/src/module1
tsc index.ts --target ES2022 --outDir js
node js/index.js
cd ../module2
tsc index.ts --target ES2022 --outDir js
node js/index.js
cd ../module3
tsc index.ts --target ES2022 --outDir js
node js/index.js
cd ../../
```

<br>

# プロジェクトと外部のモジュール

新しいプロジェクト作成

```sh
mkdir project
cd ./project
npm init --yes
npm install --save-dev typescript @types/node
npm install axios
npx tsc --init
```

tsconfig.jsonを以下に変更
```json
"target": "es2020",
"module": "esnext",
"moduleResolution": "node",
"outDir": "./js",
"include": ["./src/**/**.ts"]
```

package.jsonに以下を追加
```json
"type": "module",
```

src/index.ts
```ts
import axios from "axios"

console.log(axios.VERSION)
```

コンパイルして実行
```sh
npx tsc
node js/index.js
cd ../../
```