/**
 * Created by Jepson on 2018/4/17.
 */


import React, { Component } from 'react'

import {
  Text,
  View
} from 'react-native'


export default class FooterComponent extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      isMoreToLoad: props.isMoreToLoad
    }
  }

  // 当 props 变化时调用, 进行了组件隔离, 在这里 setState 触发 render 进行组件更新
  componentWillReceiveProps( props ) {
    this.setState({
      isMoreToLoad: props.isMoreToLoad
    })
  }

  render() {
    // 文本外面必须套 Text
    return (
      <View style={{ alignItems: 'center'}}>
        <Text style={{ fontSize: 50, color: "blue" }}>
          { this.state.isMoreToLoad ? '加载中...' : '没有更多数据了'}
        </Text>
      </View>
    )
  }
}
