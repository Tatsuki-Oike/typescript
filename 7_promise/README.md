# 1 typescript環境構築

```sh
cd ./7_promise/typescript
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

```sh
npx tsc
node js/1_promise.js
node js/2_error.js
node js/3_async.js
node js/4_await.js
```

<br>

# 2 Backend

```sh
cd ../backend
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
pip3 install -r requirements.txt
python3 api.py
```

新しいターミナルで以下を実行
```sh
node ./7_promise/typescript/js/5_axios_promise.js
node ./7_promise/typescript/js/6_axios_async.js
```