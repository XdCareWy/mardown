# npx

1. `npx`是`node`自带的一个npm模块，可直接使用

2. 作用

   - 调用项目中安装的模块

   项目中安装了`webpack`模块，在使用的时候一般是`./node_modules/.bin/webpack -v`，使用`npx`直接可以使用项目中的内部模块，`npx webpack -v`。

   原理：`npx`运行的时候，会到`node_modules/.bin`路径和`$PATH`去检查命令是否存在

   - 避免全局安装模块

   `npx create-react-app my-react-app`，运行后，`npx`将`create-react-app`下载到一个临时目录下，使用完毕后将其删除，避免了在全局环境中安装。

   > 1. 携带版本  `npx uglify-js@3.1.0 main.js -0 ./dist/main.js`
   > 2. `--no-install`，强制`npx`使用本地模块，不下载远程模块。如果本地不存在，会报错
   > 3. `--ignore-existing`，忽略本地模块，强制安装远程模块

   - 使用不同的node版本

   

   - 执行`GitHub`源码

     注意：远程代码必须是一个模块，即必须包含`package.json`和入口脚本

   > ```bash
   > npx github:piuccio/cowsay hello
   > ```

