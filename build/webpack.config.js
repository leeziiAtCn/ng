const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CUR_ENV = require('./env')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'
process.noDeprecation = true
module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'javascript/[name][hash:4].[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isBundle
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash:3]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:3]'
        }
      }
    ]
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
    'babel-polyfill': '_babelPolyfill',
    'echarts': 'echarts',
    'axios': 'axios',
    'vuex': 'Vuex'
  },
  devtool: isBundle ? false : '#cheap-module-eval-source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'common': path.join(__dirname, '../src/common'),
      'components': path.join(__dirname, '../src/components'),
      'javascripts': path.join(__dirname, '../src/statics/javascripts'),
      'less': path.join(__dirname, '../src/statics/less'),
      'layout': path.join(__dirname, '../src/layout'),
      'page': path.join(__dirname, '../src/page')
    },
    extensions: ['.js', '.vue']
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    noInfo: false,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '*': {
        target: 'https://test.ezhangyu.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin('dist',
      {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        dry: false
      }),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true // 删除空白符与换行符
      }
    }),
    new webpack.DefinePlugin({
      CUR_ENV: JSON.stringify(CUR_ENV)
    }),
    new ExtractTextPlugin('style/styles.css'),
    new UglifyJSPlugin()
  ]
}
