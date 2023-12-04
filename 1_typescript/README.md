# 1 typescript環境構築

nodeのインストール<br>
https://nodejs.org/ja/download

```sh
npm install -g typescript
tsc --version
```

```sh
cd ./1_typescript
tsc 1_type.ts --target ES2022 --outDir js
node js/1_type.js
tsc 2_operator.ts --target ES2022 --outDir js
node js/2_operator.js
tsc 3_syntax.ts --target ES2022 --outDir js
node js/3_syntax.js
cd ..
```