import { View, Text,Image } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
    <Image
        source={{uri: 'https://i.pinimg.com/236x/8b/5a/91/8b5a914d027c22873d77cf03e08dd495.jpg'}}
        style={{width: '100%', height: '100%'}}
     />
   </View>
  )
}

export default Settings