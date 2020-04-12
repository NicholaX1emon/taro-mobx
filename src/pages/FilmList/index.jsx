import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'

@inject('filmStore')
@observer
class FilmList extends Component {
  componentDidMount() {
    this.props.filmStore.getAsyncFilms()
  }

  render() {
    const { filmStore: { films } } = this.props

    return (
      <View>
        {
          Array.isArray(films) && films.length === 0 && 
          <View style={{textAlign: 'center'}}>
            <Text style={{fontSize: '36px'}}>welcome home</Text> 
          </View>
        }
        {
          films.slice().map(film => {
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
          })    
        }
      </View>
    )
  }
}

export default FilmList
