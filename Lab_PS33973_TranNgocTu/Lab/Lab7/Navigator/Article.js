import { View, Text, Image } from 'react-native'
import React from 'react'

const Article = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Image
        source={{ uri: 'https://i.pinimg.com/236x/7d/29/81/7d2981f09e1d7501e5735a0297bfbc26.jpg' }}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  )
}

export default Article