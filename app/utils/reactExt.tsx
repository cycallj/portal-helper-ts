import React, { Component } from 'react';
import { message, notification } from 'antd';

// 该文件负责引入 antd 常用组件，然后导出这个整合了 antd 组件的类
// 这里用到泛型来灵活化 state 和 props 的 interface
// 使用的组件需要 extends ComponentExt
export class ComponentExt<P = {}, S = {}> extends Component<P, S> {
  $message = message;
  $notification = notification;
}