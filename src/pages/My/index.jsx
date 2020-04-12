/* eslint-disable react/no-unused-state */
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, AtAvatar } from "taro-ui"

import './index.less'

class My extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: {
        modal: false,
      },
      is_auth: true,
      avatarUrl: '',
      nickName: '未知',
    }
  }

  async componentDidMount () { 
    try {
      const res = await Taro.getSetting({})
      const { authSetting } = res
      if (authSetting['scope.userInfo']) {
        Taro.getUserInfo({})
        .then(user => {
          console.log('user_info ---', user)
          const { userInfo: { avatarUrl, nickName } } = user
          this.setState({
            is_auth: true,
            avatarUrl,
            nickName,
          })
        }).catch(e => {
          console.log(e)
          this.setState({
            is_auth: true
          })
        })
      } else {
        this.setState({
          is_auth: false,
        })
      }
    } catch(e) {
      console.log('error --->', e)
    } 
  }

  config = {
    navigationBarTitleText: '首页'
  }

  onToggleVisible = type => {
    const { visibility } = this.state
    this.setState({
      visibility: {
        ...visibility,
        [type]: !visibility[type]
      }
    })
  }

  onGetUserInfo = e => {
    if (e.detail.userInfo) {
      const { avatarUrl, nickName } = e.detail.userInfo
      this.setState({
        visibility: {
          ...this.state.visibility,
          modal: false,
        },
        is_auth: true,
        avatarUrl,
        nickName,
      })
    } else {
      this.onToggleVisible('modal')
    }
  }

  render () {
    const { is_auth, visibility, avatarUrl, nickName } = this.state

    return (
      <View className='user-container'>
        {
          !is_auth 
            ? <AtButton type='primary' onClick={() => this.onToggleVisible('modal')}>点击登录</AtButton>
            : <View className='user-header'>
              <AtAvatar circle image={avatarUrl} size='large' className='user-avatar' /> 
              <Text className='user-nickname'>{nickName}</Text>
            </View>
        }
        <AtModal isOpened={visibility.modal}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
              123455
          </AtModalContent>
          <AtModalAction> 
            <Button onClick={() => this.onToggleVisible('modal')}>取消</Button> 
            <Button open-type='getUserInfo' onGetUserInfo={this.onGetUserInfo}>授权</Button> 
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}

export default My 
