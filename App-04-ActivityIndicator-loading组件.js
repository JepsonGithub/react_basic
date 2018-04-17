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
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';


// 定义并导出组件
export default class App extends Component {
  // 定义构造函数
  constructor( props ) {
    // 通过调用 super 调用父类的构造函数, 才能在子类构造函数中使用 this
    super( props )

    this.state = {

    }
  }

  render() {
    return (
      <View>
        {/* color: 表示 loading 效果的颜色, size 可以设置 loading 的大小, 但是只能两种 large 和 small */}
        <ActivityIndicator animating={ true } color="red" size="large"></ActivityIndicator>
      </View>
    )
  }
}


const styles = StyleSheet.create({

})
