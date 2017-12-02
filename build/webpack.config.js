const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackIncludeAssetsPlugin = require(
  'html-webpack-include-assets-plugin')
const CUR_ENV = require('./env')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'
process.noDeprecation = true
let config = {
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
      }
    ]
  },
  devtool: isBundle ? false : '#cheap-module-eval-source-map',
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      common: path.join(__dirname, '../src/common'),
      layout: path.join(__dirname, '../src/layout'),
      page: path.join(__dirname, '../src/page'),
      javascripts: path.join(__dirname, '../src/statics/javascripts'),
      less: path.join(__dirname, '../src/statics/less'),
      statics: path.join(__dirname, '../src/statics')
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
        target: 'http://192.168.1.202',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        //鍘嬬缉HTML鏂囦欢
        removeComments: true, //绉婚櫎HTML涓殑娉ㄩ噴
        collapseWhitespace: true //鍒犻櫎绌虹櫧绗︿笌鎹㈣绗�
      }
    }),
    new webpack.DefinePlugin({
      CUR_ENV: JSON.stringify(CUR_ENV)
    }),
    new ExtractTextPlugin('style/styles.css')
  ]
}
if (isBundle) {
  config.plugins.push(
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new UglifyJSPlugin(),
    new CopyWebpackPlugin([
      // {
      //   from: './ie',
      //   to: 'ie'
      // },
      // {
      //   from: './404.html'
      // }
    ]),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//at.alicdn.com/t/font_372074_ong22op7y76cg14i.css',
          type: 'css'
        },
        {
          path: '//unpkg.com/babel-polyfill@6.26.0/dist/polyfill.min.js',
          type: 'js'
        },
        {
          path: '//unpkg.com/vue@2.5.3/dist/vue.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/axios/0.16.2/axios.min.js',
          type: 'js'
        },
        {
          path: '//unpkg.com/vuex@3.0.1/dist/vuex.min.js',
          type: 'js'
        },
        {
          path: '//unpkg.com/vue-router@3.0.1/dist/vue-router.min.js',
          type: 'js'
        },
        {
          path: '//unpkg.com/element-ui@2.0.2/lib/index.js',
          type: 'js'
        },
      ],
      append: false,
      publicPath: ''
    }))
  config.externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
    'babel-polyfill': '_babelPolyfill',
    'axios': 'axios',
    'vuex': 'Vuex'
  }
}
module.exports = config