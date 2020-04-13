# portal-helper-ts

http://www.fhd001.com/support/center/center.html#/

## 需要安装的 vscode 插件

1.  TSLint: https://palantir.github.io/tslint/rules/
2.  stylelint
3.  Prettier
4.  workspace setting.json: {"editor.tabSize": 2,"editor.formatOnSave": true,"prettier.semi": false,"prettier.singleQuote": true}

## tsx 书写约定

1.  import 外部包
    import React, { Component } from 'react';
    import { hot } from 'react-hot-loader';
2.  空行
3.  import 项目内
    import Test from '@public/Test';
    import Counter from '@view/index/Counter/Counter';
4.  空行
5.  import 静态文件
    import '@css/index/main.scss';
6.  空行
7.  tsx 文件内部逻辑

## 需要优化点

1.  axios 的封装
2.  api 接口的接口规范、注释

## dev 环境开发步骤

1.  host 切换成本地，例子：192.168.0.46 www.fhd001.com
2.  npm start
3.  访问 www.fhd001.com:3000/
4.  请求接口需要登陆的话，提前到 www.fhd001.com 登陆
