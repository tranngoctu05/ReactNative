import { View, Text, StatusBar, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Bai2 = () => {
    return (

        <ImageBackground
            style={styles.container}
            source={{ uri: 'https://i.pinimg.com/236x/2c/0d/ee/2c0dee5587fac1647f7397fc7f3e68e7.jpg' }}
        >
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={styles.details}>
                <Text>Welcom</Text>

                {/* Nút "Get Started" */}
                <TouchableOpacity style={styles.getStartedButton}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    getStartedButton: {
        backgroundColor: 'white',
        width: 100,
        height: 50,
        fontSize: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'opensans-semibold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default Bai2