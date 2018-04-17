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

import FooterComponent from './components/FooterComponent'


export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      list: [],
      refreshing: false,  // true 表示正在刷新, false 表示刷新完成
      isMoreToLoad: true
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

  // 分割线组件
  _separator = () => {
    return <View style={{ height:2, backgroundColor:'blue' }}/>;
  }

  // 指定key, 要求返回值是字符串
  _keyExtractor = (item) => item.id.toString()

  // 下拉刷新回调函数
  _refresh = () => {
    this.setState({ refreshing: true })

    // 在下拉刷新时, 发送请求获取数据, 进行渲染
    setTimeout(() => {

      let list = this.state.list
      let nextId = Math.max.call( null, ...list.map( item => item.id ) ) + 1
      list.unshift({
        id: nextId,
        name: `Peter -- ${nextId}`
      })
      this.setState({
        list: list,
        refreshing: false
      })

    }, 500)
  }

  // 上拉加载回调函数
  // 每次上拉加载 20 条数据
  _onEndReached = () => {
    let list = this.state.list

    if ( this.state.list.length < 40 ) {
      this.setState({ refreshing: true })

      setTimeout(() => {

        for ( let i = 0; i < 20; i++ ) {
          let nextId = Math.max.call( null, ...list.map( item => item.id ) ) + 1
          list.push({
            id: nextId,
            name: `Peter -- ${nextId}`
          })
        }

        this.setState({
          list: list,
          refreshing: false
        })
      }, 500)
    }
    else {
      // 设置状态为 false
      this.setState({
        list: list,
        isMoreToLoad: false
      })
    }
  }


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

        // 指定尾部组件, 组件隔离, 需要
        ListFooterComponent={ <FooterComponent isMoreToLoad={this.state.isMoreToLoad}></FooterComponent> }

        // keyExtractor 指定 key, 让该组件唯一
        keyExtractor={ this._keyExtractor }

        // 下拉刷新功能
        onRefresh={ this._refresh }
        refreshing={ this.state.refreshing }

        // 上拉加载功能
        // onEndReachedThreshold 表示距离底部还有多少时触发, 0.2 表示比例
        onEndReachedThreshold="0.2"
        onEndReached={ this._onEndReached }
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
