'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vuxLoader = require('vux-loader')//配合vux使用
const vueLoaderConfig = require('./vue-loader.conf')
var SpritesmithPlugin = require('webpack-spritesmith')
var ImageminPlugin = require('imagemin-webpack-plugin').default

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



const webpackConfig = {//新增vux使用
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
    //新增 雪碧的设置和压缩图片大小
  plugins: [
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', 
      pngquant: {
        quality: '80'
      }
    }),
    new SpritesmithPlugin({
      // 目标小图标
      src: {
          cwd: path.resolve(__dirname,'../src/assets/sprite'),
          glob: '*.png'
      },
      // 输出雪碧图文件及样式文件
      target: {
          image: path.resolve(__dirname, '../src/assets/images/sprite.png'),
          css: [[path.resolve(__dirname, '../src/assets/css/sprite.less'),{format:'function_based_template'}]]
      },
      customTemplates: {
        'function_based_template': path.resolve(__dirname, '../src/utils/my_handlebars_template.handlebars')
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
          cssImageRef: '../images/sprite.png'
      },
      spritesmithOptions: {
          algorithm: 'binary-tree',
          padding:10
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
//新增vux使用
module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui'],
})