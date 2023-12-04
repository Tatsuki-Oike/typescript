# 1 typescript環境構築

```sh
cd ./2_obj
tsc 1_obj.ts --target ES2022 --outDir js
node js/1_obj.js
tsc 2_obj_input.ts --target ES2022 --outDir js
node js/2_obj_input.js
tsc 3_obj_type.ts --target ES2022 --outDir js
node js/3_obj_type.js
tsc 4_args.ts --target ES2022 --outDir js
node js/4_args.js
tsc 5_map.ts --target ES2022 --outDir js
node js/5_map.js
cd ..
```