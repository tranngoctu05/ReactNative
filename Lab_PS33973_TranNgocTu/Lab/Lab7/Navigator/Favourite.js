import { View, Text, Image } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{ uri: 'https://i.pinimg.com/474x/b3/8a/f6/b38af6d8846fabc79abcb9965be5b96e.jpg' }}
      />
    </View>
  )
}

export default Favourite