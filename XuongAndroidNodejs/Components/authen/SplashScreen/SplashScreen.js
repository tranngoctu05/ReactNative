import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
     <Image
        style={styles.Logo}
        source={require('./../../../assets/Image/Logo.png')}
      />
    </View>
  )
}

export default SplashScreen