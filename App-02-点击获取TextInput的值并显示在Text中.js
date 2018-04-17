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
  StyleSheet
} from 'react-native';


// 定义并导出组件
export default class App extends Component {
  // 定义构造函数
  constructor( props ) {
    // 通过调用 super 调用父类的构造函数, 才能在子类构造函数中使用 this
    super( props )

    this.state = {
      inpTxt: "",
      txtContent: ""
    }
  }

  render() {
    return (
      <View>
        <TextInput
          value={ this.state.inpTxt }
          style={[ styles.fSize20 ]}
          placeholder="请输入用户名"
          onChangeText={ txt => this.setState({ inpTxt: txt })  }
        />
        <Button
          // 为了保证平台的统一, 所以按钮只有非常小的可定制性
          color='deeppink'
          title="同步"
          onPress={ () => this.setState({ txtContent: this.state.inpTxt }) }
        ></Button>
        <Text style={[ styles.fSize20 ]}>文本框的内容为: { this.state.txtContent }</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  fSize20: {
    fontSize: 20
  }
})
