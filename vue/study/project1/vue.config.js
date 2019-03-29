//vue.config.js

module.exports = {
  publicPath: './',

  // configureWebpack: {
  //
  // }

  configureWebpack: config => {
    if (process.env.NODE_ENV == 'production'){
      //为生产环境配置


    } else {
      //为开发环境配置


    }
  }

}
