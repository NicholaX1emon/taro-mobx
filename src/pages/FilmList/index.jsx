import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.less'

export default class FilmList extends Component {
  render() {
    const { films = [] } = this.props
    return (
      <View>
        {
          films.length === 0 && 
          <View style={{textAlign: 'center'}}>
            <Text style={{fontSize: '36px'}}>welcome home</Text> 
          </View>
        }
        {films.length > 0 && films.map(film => {
          return (
            <View key={film.id} className='film-container'>
              <View className='film-title'>
                {film.title}
              </View>
              <View className='film-description'>
                {film.description}
              </View>
              <View className='film-stuff'>
                <View>导演：{film.director}</View>
                <View>出品：{film.producer}</View>
              </View>
              <View className='film-footer'>
                <View className='film-date'>上映时间：{film.release_date}</View>
                <View className='film-score'><Text className='mobx mobx-star-outline' />{film.rt_score}</View>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}
