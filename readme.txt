mkdir webpack-movie //构建项目webpack-movie
npm init //初始化package.json
cnpm install webpack --save-dev //安装webpack
cnpm install html-webpack-plugin --save-dev //此插件可以指定模板文件生成新的html文件，并将资源文件自动引入到html文件中,此html文件的路径为output中指定的path目录

cnpm install babel-loader babel-core --save-dev //处理文件中引入的js文件
cnpm install babel-preset-latest --save-dev //js支持转换哪些（es5,es6,...）特性

cnpm install css-loader style-loader --save-dev //处理文件中引入的css文件
cnpm install postcss-loader --save-dev //css后处理
cnpm install autoprefixer --save-dev //给css加前缀

cnpm install less --save-dev //处理less文件
cnpm install less-loader --save-dev //处理less文件
cnpm install sass-loader --save-dev //处理scss文件

cnpm install html-loader --save-dev //处理html模板文件
cnpm install ejs-loader --save-dev //处理tpl模板文件,可以用<% %>语法

cnpm install file-loader --save-dev //处理图片文件
cnpm install url-loader --save-dev //处理图片文件,可以指定limit参数，将图片转换为base64编码
cnpm install image-webpack-loader --save-dev //压缩图片文件



//babel参数配置可在package.json中指定
"babel":{
	"presets":["latest"]
}
