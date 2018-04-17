/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';


export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      list: []
    }
  }


  componentWillMount() {
    for ( var i = 0; i < 20; i++ ) {
      this.state.list.push({
        id: i + 1,
        name: `Peter ---- ${i+1}`
      })
    }

    this.setState({
      list: this.state.list
    })
  }

  // item => { id: 1, name: 'Peter --- 1'}
  _renderItem = ({ item }) => {
    return (
      <View style={{ height: 100, justifyContent: 'center' }}>
        <Text style={ styles.myfont }>id: { item.id }, name: { item.name }</Text>
      </View>
    )
  }

  // 分割线
  _separator = () => {
    return <View style={{ height:2, backgroundColor:'blue' }}/>;
  }

  // 指定key, 要求返回值是字符串
  _keyExtractor = (item) => item.id.toString()

  render() {
    return (
      <FlatList
        // data 用来指定长列表的数据源
        data={ this.state.list }
        // renderItem 用来指定数组每项元素展示什么内容
        // 注意: renderItem 参数是一个对象, 通过解构, 将数组中的单项解构出来
        renderItem={ this._renderItem }
        // 指定分割线
        ItemSeparatorComponent={ this._separator }
        // keyExtractor 指定 key
        keyExtractor={ this._keyExtractor }
      >

      </FlatList>
    )
  }
}

const styles = StyleSheet.create({
  myfont: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },
  separator: {
    height: 5,
    backgroundColor: 'pink'
  }
})
