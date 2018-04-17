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
  Image
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
        {/* 加载本地图片: 不设宽高, 默认图片大小, 可以设置宽高 */}
        <Image
          resizeMode="center"
          style={{ width: 300, height: 300 }}
          source={ require('./images/001.jpg') }/>

        {/* 加载远程图片, 注意: 必须指定宽高, 否则是看不到图片的 */}
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523895311197&di=39a6e45d401676ff02b09f726707cffd&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F42166d224f4a20a41646eab697529822720ed063.jpg' }}></Image>
      </View>
    )
  }
}


const styles = StyleSheet.create({

})
