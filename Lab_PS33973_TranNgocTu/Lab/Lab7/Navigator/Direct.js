import { View, Text, Image } from 'react-native'
import React from 'react'

const Direct = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{ uri: 'https://i.pinimg.com/236x/35/1b/34/351b343ea91d55ee4132b50db85e9a2a.jpg' }}
      />
    </View>
  )
}

export default Direct