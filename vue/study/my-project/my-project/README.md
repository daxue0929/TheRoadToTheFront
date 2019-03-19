# mpvue2_

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



"eslint": "^4.19.1",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-import": "^2.11.0",
    "eslint-plugin-node": "^6.0.1",
    "eslint-plugin-html": "^4.0.3",
    "eslint-config-standard": "^11.0.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
