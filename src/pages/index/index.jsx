import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import FilmList from '../FilmList'

import './index.less'

class Index extends Component {
  componentDidMount () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {

    return (
      <View className='index'>
        <FilmList />
      </View>
    )
  }
}

export default Index 
