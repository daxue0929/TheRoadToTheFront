#!/bin/bash

npm cache clean --force

rm -rf node_modules

echo "清理完毕， 开始执行安装依赖....."

sleep 2

npm i