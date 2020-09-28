'use strict'
// use strict 开发模式严格模式

const path = require('path')  // 处理路径
const defaultSettings = require('./src/settings.js') // 默认配置文件
// 从写文件地址 将相对路径变为绝对路径
function resolve(dir) {
  // __dirname 当前文件加的跟目录
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Admin Template' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528 // dev port 存服务端口号

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/', // 部署应用包时的基本 URL
  outputDir: 'wyh', // 设置生产环境下购置的文件目录名称
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development', // 是否在开发下；设置esline-loader
  productionSourceMap: false, //生产环境的是否需要 source map，
  devServer: { // 配置的本地服务 是否自动打开浏览器；服务器代理。端口...
    port: port, // 端口号
    open: true,
    overlay: {// 是否在中总段提示警告/错误信息；
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js'),
    proxy: {
      // [process.env.VUE_APP_BASE_API]: { // /api
      //   target: process.env.VUE_APP_BACKGROUND_APPLICATION_URL,//http://49.232.47.192:9527
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: '/api' // ^/api:/api
      //   }
      // }
      '/api': {
        // target:'http://49.232.47.192:9527/',
        target:'http://192.168.1.154:9527/',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/api'
        }
      },
    }
    // /http://49.232.47.192:9527/api/goodList
    // /api  = http://49.232.47.192:9527/api
    // /dev-api/goodList
    // http://49.232.47.192:9527/api/goodList

    // /api  =  http://49.232.47.192:9527/
    // /api/goodList = http://49.232.47.192:9527/api/goodList
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,// index.html 的title 
    resolve: {
      alias: {
        '@': resolve('src'),  // @ 符号的默认路径 为 src @/views/xx
        'api':resolve('./src/api')
      }
    }
  },
  // 与webpack 有关的配置信息
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader 处理 xxx.svg 文件;例如 xx.vue 也许要处理；用vue-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    // 作者自己 用 svg 写的自图标；做了一些配置
    config.module
      .rule('icons')  // 规则
      .test(/\.svg$/)  // 规则验证
      .include.add(resolve('src/icons'))  // 找哪一个文件下内容及逆行处理
      .end()  //结束
      // svg-sprite-loader 处理xxx.svg文件的
      .use('svg-sprite-loader')  // 使用的哪一个loader
      .loader('svg-sprite-loader') // 加载了loader
      .options({  // svg-sprite-loader loader 的配置信息 
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development', // 当环境为开发环境；执行以下配置
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')  // 使用插件ScriptExtHtmlWebpackPlugin编译html文件
            .after('html')
            .use('script-ext-html-webpack-plugin', [{ // 使用插件编译.js文件
              // `runtime` must same as runtimeChunk name. d efault is `runtime`
              inline: /runtime\..*\.js$/  // 正则匹配文件
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all', // 在所有文件；多可以准寻以下规则
              cacheGroups: {
                libs: { // 处理node-modeles
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
