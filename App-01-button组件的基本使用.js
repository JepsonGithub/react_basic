/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button, // 导入按钮组件, 注意, 里面没有 onClick 是 onPress
  TextInput, // 文本输入组件
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ width: 100 }}>
        <Button
          // 指定按钮样式, 直接设置是指定不了的
          color='deeppink'
          // 设置按钮展示的文字内容
          title="按钮"
          // 指定单击事件
          onPress={ () => console.warn( "按钮点击了33" ) }
          // 设置为 disabled  不可点
          disabled={ true }
        ></Button>
      </View>
    );
  }
}
