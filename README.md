# portal-helper-ts

1.  Rantron PC 前端框架（多页面）
2.  老版示例：http://www.fhd001.com/support/center/center.html#/

## 技术栈

1.  typescript + react + mobx + antd(v4) + axios + webpack

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
7.  文件内部变量声明
8.  空行
9.  tsx 文件内部逻辑

## 静态图片资源引入约定

1.  统一使用静态资源服务器上的资源，不在项目内引入，故没有 fileLoader

## 需要优化点

1.  react hook 进行开发
2.  axios 的封装
3.  api 接口的接口规范、注释
4.  打包之前，需要删除整个 distribution 文件夹，再打包，否则会有老文件遗留。

## dev 环境开发步骤

1.  host 切换成本地，例子：192.168.0.46 www.fhd001.com
2.  npm start
3.  访问 www.fhd001.com:3000/
4.  请求接口需要登陆的话，提前到 www.fhd001.com 登陆
