import { View, Text,Image } from 'react-native'
import React from 'react'

const Call = () => {
  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
     <Image
        source={{uri: 'https://i.pinimg.com/236x/d6/ec/29/d6ec29b8ef323e05928cb179e1d50e32.jpg'}}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  )
}

export default Call