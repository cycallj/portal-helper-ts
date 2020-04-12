# portal-helper-ts
http://www.fhd001.com/support/center/center.html#/

## 需要安装的 vscode 插件
1.  TSLint: https://palantir.github.io/tslint/rules/
2.  stylelint

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
