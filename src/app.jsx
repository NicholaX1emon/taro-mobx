import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
// import 'taro-ui/dist/style/index.scss'

import Index from './pages/index'
import filmStore from './store/film'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  filmStore,
}

class App extends Component {

  componentDidMount () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/My/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'assets/images/home.png',
          selectedIconPath:'assets/images/home_active.png'
        },
        {
          pagePath: 'pages/My/index',
          text: '我的',
          iconPath: 'assets/images/user.png',
          selectedIconPath:'assets/images/user_active.png'
        },
      ],
      color: '#323232',
      selectedColor: '#C93E3E',
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
