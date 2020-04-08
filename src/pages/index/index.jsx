import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import FilmList from '../FilmList'

import './index.less'


@inject('filmStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.props.filmStore.getAsyncFilms()
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { filmStore: { films } } = this.props
    return (
      <View className='index'>
        <FilmList films={films} />
      </View>
    )
  }
}

export default Index 
