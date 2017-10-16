var path = require('path');
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')


var rootPath = path.resolve(__dirname, './'); // 项目根目录
var src = path.resolve(__dirname, './src');   // 开发目录
var dist = path.resolve(__dirname, './dist'); // 打包目录


module.exports = function( env ){
  return {
    entry: {
      main: path.join(src, "main.js"),
      // 框架 / 类库 分离打包
      vendor: [
        'react',
        'react-dom',
        'react-router',
        'prop-types',
        'antd', //antd 过大，需要按需加载（暂时不处理）
        'react-addons-css-transition-group',
        'axios'
      ]
    },

    output: {
      // path: path.join(dist, 'static'),
      // filename: "[name].js",
      // publicPath: './static/'    //处理静态资源引用地址

      path: dist,
      filename: "[name].js",
      // publicPath: './'
    },

    devtool: "cheap-eval-source-map",

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        // ================================
        // 自定义路径别名
        // ================================
        ASSET: path.join(src, 'assets'),
        COMPONENT: path.join(src, 'components'),
        ROUTE: path.join(src, 'routes'),

      }
    },
    resolveLoader: {
      modules: ['node_modules']
    },
    //定义非直接引用依赖
    //定义第三方直接用Script引入而不需要打包的类库
    //使用方式即为var $ = require("jquery")
    // externals: {
    //   jquery: "jQuery",
    //   pageResponse: 'pageResponse'
    // };

    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          loader: 'babel-loader',
          exclude: /node_module/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
            publicPath: '/dist'
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
          })
        },
        {
          test: /\.(woff|svg|eot|ttf)(\?.*)?$/,
          loader: "url-loader?limit=50000"  // 50000B 以下使用 base64
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          loader: "url-loader?limit=819200"
        },
        // {
        //   test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 20000,
        //
        //     //大图片和字体文件放在单独的assets文件夹
        //     name: 'assets/[name].[ext]'
        //
        //     //图片打包为相对context的路径
        //     //context: path.resolve(srcPath + '/scripts')
        //   }
        // }
      ]
    },

    plugins: [
      //每个entry, 打一个包
      //如果使用了异步组件，css还是打一个大包
      //如果是dev环境, css不要打单独的包
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(src, "index.html")
      }),

      // new webpack.optimize.UglifyJsPlugin({ //清除打包后文件中的注释,和copyright信息
      //   output: {
      //     comments: false,
      //   },
      //   compress: {
      //     warnings: false
      //   }
      // }),

      //清空打包目录(用于在building之前删除你以前build过的文件)
      // new CleanWebpackPlugin(path.resolve(rootPath, 'app/public/build')),
      new CleanWebpackPlugin( dist , {
        root: rootPath,
        verbose: false
      }),

      //把公用文件单独打包
      //名字会自动使用output的filename
      // new webpack.optimize.CommonsChunkPlugin({// 公共代码分离打包
      //   names: ['vendor']
      // }),

      new CopyWebpackPlugin([ // 复制高度静态资源
        {
          from: path.join(rootPath, 'static'),
          to: dist,
          ignore: ['*.md']
        }
      ]),

      // new webpack.DefinePlugin({
      //   'process.env': {// 这是给 React / Redux 打包用的
      //       NODE_ENV: JSON.stringify('production')
      //   },
      //   __DEV__: env === 'development',
      //   __PROD__: env === 'production',
      // }),

    ],

    devServer: {
      contentBase: dist,
      inline: true,
      port: 3030
    }

  }
}
