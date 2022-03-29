const fs = require("fs");
const path = require("path");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {
    // 多页面配置
    sitePaths: [
        {
            name: "page1", // 生成后代码界面入口js文件名
            entry: [
                "core-js",
                "regenerator-runtime",
                resolveApp("./src/page/pc.jsx"),
            ],
            htmlPluginsOption: {
                template: {
                    dev: path.join(__dirname, "./src/page/pc.html"),
                    online: path.join(__dirname, "./src/page/pc.tpl"),
                },
                filename: {
                    dev: "./pc.html",
                    online: path.join(__dirname, "../page/pc/edit.tpl"),
                },
            },
        },
    ],
    // TODO: 变量定义  new webpack.DefinePlugin(
    define: {},
    // TODO:
    proxy: {},
};
