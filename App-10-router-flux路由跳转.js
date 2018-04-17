// 演示 react-native-flux-router 路由的使用
import React, { Component } from 'react'

import {
  View,
  Text,
  Button,   // 按钮组件
} from 'react-native'


// 导入 路由组件
import {
  Router,  // 用来包裹整个应用
  Scene,    // 场景, 也就是 web 中的一个页面
  Actions,  // 作用: 用来实现路由跳转
} from 'react-native-router-flux'


// 创建两个函数组件
const PageOne = (props) => (
  <View>
    <Text>我是 PageOne, 这是第一个页面 </Text>
    {/* 希望点击按钮, 跳转到第二个页面 */}
    <Button color="deeppink" title="跳转到 PageTwo" onPress={ Actions.pageTwo } ></Button>

    <Text>获取到的参数: { props.msg }</Text>
  </View>
)
const PageTwo = () => (
  <View>
    <Text>我是 PageTwo, 这是第二个页面 </Text>
    {/*
        color 表示颜色, title 表示按钮的文本 onPress 点击按钮的回调函数
        通过 key 实现跳转
        注意: 如果是传递参数, 需要是一个函数, 所以这里要写成箭头函数的形式
    */}
    <Button color="blue" title="回去 PageOne" onPress={ () => Actions.pageOne({ msg: '这是第二页传递过来的数据'}) } ></Button>
  </View>
)

export default class App extends Component {
  render() {
    // 之前写的时候, 都是 View 作为根组件
    // 但是使用路由之后, 要将 Router 作为根组件, 使用 Router 包裹整个内容
    // Scene 表示场景, 也就是 web 中的页面, 可以用来切换

    /*
    * key: 用来唯一标识一个组件, 页面的跳转也是通过这个 key 实现, 不允许重复
    * component: 用来指定哪个组件
    * title: 标题
    * initial: 表示默认页
    * */

    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={ PageOne } title="场景一" initial={ true }></Scene>
          <Scene key="pageTwo" component={ PageTwo } title="场景二" ></Scene>
        </Scene>
      </Router>
    )
  }
}

