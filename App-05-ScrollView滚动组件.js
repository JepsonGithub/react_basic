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
  ActivityIndicator,
  ScrollView
} from 'react-native';


// 默认情况下, react-native 是不会产生滚动条的, 即使内容超过的整个容器的高度,
// 必须要放在一个滚动容器中, 使用 ScrollView 组件包裹

// ScrollView 组件一般用于内容不多的情况下 (刚好超出一屏等), 他需要一定确定的高度,
// 然后一次性将所有的子组件全部粗暴的渲染出来, 所有虽然很简单易用, 但是性能角度却不好

// 如果内容是比较多的列表时, 就不适合使用 ScrollView 了

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      list: []
    }
  }

  componentWillMount() {
    for ( var i = 0; i < 30; i++ ) {
      this.state.list.push({
        id: i + 1,
        name: `Jepson -- ${i}`
      })
    }

    // 由于直接 修改 this.state.list 并不会触发 render
    // 所以需要最后手动调用 setState
    this.setState({
      list: this.state.list
    })
  }

  render() {
    return (
      <ScrollView>
        <View>
          {
            this.state.list.map( item => {
              return (
                <Text key={ item.id } style={ styles.myfont }>id: { item.id }, name: { item.name } </Text>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  myfont: {
    fontSize: 30,
    color: 'red'
  }
})
