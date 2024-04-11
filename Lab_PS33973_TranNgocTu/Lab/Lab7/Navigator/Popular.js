import { View, Text,Image} from 'react-native'
import React from 'react'

const Popular = () => {
  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
    <Image
        source={{uri: 'https://i.pinimg.com/236x/5f/d0/42/5fd0422585afb1c7ab35b6cfae463997.jpg'}}
        style={{width: '100%', height: '100%'}}
     />
   </View>
  )
}

export default Popular