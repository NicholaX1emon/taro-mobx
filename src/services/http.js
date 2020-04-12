/* eslint-disable import/prefer-default-export */
import Taro from '@tarojs/taro'

const interceptor = chain => {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  requestParams.header = {
    ...requestParams.header,
    token: '123456',
  }

  console.log(`http ${method || 'GET'} --> ${url} data: `, data)

  return chain.proceed(requestParams)
    .then(res => {
      console.log(`http <-- ${url} result:`, res)
      return res
    })
}
Taro.addInterceptor(interceptor)

export const request = (option, method = 'GET') => {
  const { url, header, data } = option

  return Taro.request({
    url,
    method,
    header: {
      ...header,
      'content-type': 'application/json',
    },
    data,
  })
}
