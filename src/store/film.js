import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const filmStore = observable({
  films: [],
  getAsyncFilms() {
    let context = this
    Taro.request({
      url: 'https://ghibliapi.herokuapp.com/films',
      success(res) {
        const { data } = res
        context.films = data
      },
      fail(res) {
        console.log('res fail ---', res)
      }
    })
  }
})

export default filmStore