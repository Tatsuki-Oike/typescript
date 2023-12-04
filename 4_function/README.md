# 1 typescript環境構築

```sh
cd ./4_function
tsc 1_function.ts --target ES2022 --outDir js
node js/1_function.js
tsc 2_args.ts --target ES2022 --outDir js
node js/2_args.js
tsc 3_object.ts --target ES2022 --outDir js
node js/3_object.js
tsc 4_callback.ts --target ES2022 --outDir js
node js/4_callback.js
tsc 5_type.ts --target ES2022 --outDir js
node js/5_type.js
cd ..
```