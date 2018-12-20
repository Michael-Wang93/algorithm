- webpack四个核心概念： 入口(entry)， 输出(output)， loader， 插件(plugins)
- output中的publicPath可以修改index.html文件的引用的相对路径
- output.path是打包文件输出的物理路径
- devserver.publicPath为模块的发布路径，看不到只存在内存中
- 没有devserver.publicPath 时，默认会取devserver.publicPath的值，如果devserver.publicPath也没有，devserver则会默认输出到根目录(只存在于内存中)

- css-loader style-loader 打包css模块
