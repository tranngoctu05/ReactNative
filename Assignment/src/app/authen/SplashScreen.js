import { View, Image, StyleSheet,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import styles from './style'
const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');  // Use replace to prevent going back to Splash
        }, 2000);  // Adjust the timeout as needed
    }, []);
    return (
        <View style={styles1.container}>
                 <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />
        <Image
                    style={styles1.logo}
                    source={require('./../../assets/logo.png')}
                />
        </View>
    )
}

export default SplashScreen 
const styles1 = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
      flex:1,
    },
    logo:{
        width:189,
        height:189,
        resizeMode:'contain'
    }
    
    
    })