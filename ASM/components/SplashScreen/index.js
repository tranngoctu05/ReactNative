import { View,Image } from 'react-native'
import React, {useEffect} from 'react'
import styles from './style'
const SplashScreen  = ({ navigation }) => {

  useEffect(() => {
    // Simulate some loading process (e.g., fetching data, initializing)
    // After loading, navigate to the TabNavigation screen
    setTimeout(() => {
      navigation.replace('TabNavigation');  // Use replace to prevent going back to Splash
    }, 2000);  // Adjust the timeout as needed
  }, []);
  return (
    <View style={styles.container}>
       <Image style={styles.hinhanh1}
        source={require('./../../Img/logoSplash.png')}
      />
    </View>
  )
}

export default SplashScreen 