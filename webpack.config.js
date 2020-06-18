const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: 'index.html'
})
//filename：指定当我们打包好之后，新建的html文件的名字叫什么，如果不写的话，默认生成的是index.html
//template：指定以哪个html为模板去创建
//向外暴露一个打包的配置对象
module.exports = {
    mode: 'development',
    //mode: 'production',
    plugins: [
        htmlPlugin
    ],
    module: {//第三方模块配置
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }// .js/jsx结尾、use放loader、exclude排除项
        ]
    }
}