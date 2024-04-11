import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Image
                    style={styles.logo}
                    source={require('./../../Img/Logo.png')}
                />
                <TextInput
                    placeholder='Name'
                    style={styles.inputEmail} />
                <TextInput
                    placeholder='Email'
                    style={styles.inputPassword} />
                <TextInput
                    placeholder='Password'
                    style={styles.inputPassword} />
                <TextInput
                    placeholder='Re-type password'
                    style={styles.inputPassword} />
                <TouchableOpacity
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonLabel}>Register</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.orther}>
                <Text style={styles.signinRegister}>You have an account? Click Sign in</Text>
            </View>

        </View>

    )
}

export default Login;
