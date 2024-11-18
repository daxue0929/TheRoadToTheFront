module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    // eslint支持使用第三方插件，在使用插件之前，必须安装它。
    // eslint-plugin-前缀可以省略
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    // eslint规则配置
    "rules": {
        'vue/multi-word-component-names': 'off',
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off"  // 未使用的变量检查
    }
}
