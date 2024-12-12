# 基础模板项目
本项目是是vite基于vue3搭建的前端项目,采用ts的开发方式

## 代码结构图
```bash
|-- src
|   |-- api
|   |   |-- login.ts    # 异步接口
|   |-- assets
|   |-- components
|   |-- router
|   |   |-- index.ts    # 路由
|   |-- store
|   |   |-- index.ts    # 状态管理
|   |-- utils
|   |-- views           # 页面
|   |-- App.vue
|   |-- main.ts
|-- tsconfig.app.json   # 应用代码的TypeScript配置
|-- tsconfig.json       # 项目全局的TypeScript配置
|-- tsconfig.node.json  # Node.js环境下的TypeScript配置
|-- vite.config.ts

```

## 项目启动命令
```shell
# 按照要求安装对应npm版本, 然后执行如下命令
npm install

# Compile and Hot-Reload for Development
npm run dev

# Type-Check, Compile and Minify for Production
npm run build
```

## 自定义配置
See [Vite Configuration Reference](https://vite.dev/config/).

## 注意事项

- `TypeScript`默认不能处理`.vue`文件的类型信息，因此我们用`vue-tsc`来替代`tsc`命令行工具进行类型检查。在编辑器中，我们需要安装`Volar`插件，以便让`TypeScript`的语言服务能够识别`.vue`文件中的类型。(但是在webstorm中没有配置这个,可能是针对vscode的) 
