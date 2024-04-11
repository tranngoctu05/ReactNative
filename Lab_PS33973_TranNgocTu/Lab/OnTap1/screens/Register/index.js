import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Register = (props) => {
  const { navigation } = props;
  const gotoHome= () => {
    navigation.navigate('Home');
};
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <View style={styles.header}>
        <Image style={styles.imgRegister} source={require('./../../logo.png')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.lable}>Register</Text>
        <View style={styles.inputEmail}>
          <TextInput
            placeholder='Email'
            // placeholderTextColor='#828282'
            style={styles.input}
          />
        </View>
        <View style={styles.inputEmail}>
          <TextInput
            placeholder='Password'
            // placeholderTextColor='#828282'
            style={styles.input}
          />
        </View>
        <View style={styles.inputEmail}>
          <TextInput
            placeholder='Date of Birth'
            // placeholderTextColor='#828282'
            style={styles.input}
          />
        </View>
        <Text style={styles.textPolicy}>
          By signing up, you agree to our Terms,
          Data Policy and Cookies Policy.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={gotoHome}
        >
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer2}
        >
          <Text style={styles.buttonLabel2}>Cancel</Text>
        </TouchableOpacity>


      </View>


    </View>
  )
}

export default Register