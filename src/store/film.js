import { observable } from 'mobx'

import { request } from '../services/http'

const filmStore = observable({
  films: [],
  async getAsyncFilms() {
    try {
      const res = await request({
        url: 'https://ghibliapi.herokuapp.com/films',
      })
      const { data } = res
      this.films = data
      // this.films.push(...data)
    } catch(e) {
      console.log(e)
    }
  }
})

export default filmStore