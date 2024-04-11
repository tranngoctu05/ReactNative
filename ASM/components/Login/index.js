import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'


const Login = () => {
    const [isButtonPressed, setButtonPressed] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Image
                    style={styles.logo}
                    source={require('./../../Img/Logo.png')}
                />
                 <Text>

      </Text>
                <TextInput
                    placeholder='Email Address'
                    style={styles.inputEmail} />
                <View>
                    <TextInput
            
                        secureTextEntry={true }
                        placeholder='Password'
                        style={styles.inputPassword} />
                </View>
                {isButtonPressed && <Text style={styles.erroPass}>Password is not true! Try again</Text>}
                <Text></Text>
                <TouchableOpacity
                    onPress={() => setButtonPressed(!isButtonPressed)}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonLabel}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainerGG}


                >
            


                    <Image
                        style={styles.logogg}
                        source={require('./../../Img/logogg.png')}
                    />
                    <Text style={styles.buttonLabelGG}>Sign with Google</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.orther}>
                <Text style={styles.registerLogin}>Don't have an account? Click Register</Text>
                <Text style={styles.resetLogin}>Forgot password?Click Reset</Text>

            </View>

        </View>

    )
}

export default Login;
