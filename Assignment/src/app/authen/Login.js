import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useContext, useState } from 'react';
import styles from './style'
import AxiosInstance from '../helpers/AsiosInstance';
import { AppContext } from '../main/AppContext';
const Login = (props) => {
    const [securePassword, setSecurePassword] = useState(true);
    const [PasswordNotTrue, setPasswordNotTrue] = useState(false);
    const { navigation } = props;
    const { isLogin, setIsLogin, user, setUser, } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullInfo, setfullInfo] = useState(false)
    const gotoRegister = () => {
        navigation.navigate('Register');
    };
    const onPressLogin = async () => {
        if (email == '' || password == '') {
            setfullInfo(true);
            return;
        } setfullInfo(false)
        try {
            const body = {
                email: email,
                password: password,
            }
            const response = await AxiosInstance()
                .post('/users/login', body);
            console.log(response);
            if (response.status == true) {
                setIsLogin(true);
                //save user profile
                setUser(response.user);
            } else {
                setPasswordNotTrue(true);
                return;
            }
        } catch (error) {
        
            setPasswordNotTrue(true);
        }


    }
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />

            <View style={styles.contents}>
                <Image
                    style={styles.logo}
                    source={require('./../../assets/logo.png')}
                />
                <Text style={styles.caption}>
                    Welcom to Lungo !!
                </Text>
                <Text style={styles.caption2}>
                    Login to continue
                </Text>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder='Email Address'
                    placeholderTextColor='#828282'
                    style={styles.inputEmail} />
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder='Password'
                        secureTextEntry={securePassword}
                        placeholderTextColor='#828282'
                        style={styles.inputEmail} />
                    <TouchableOpacity
                        style={styles.eye}
                        onPress={() => setSecurePassword(!securePassword)}>
                        {
                            securePassword ?
                                <Image
                                    style={styles.eye1}
                                    source={require('./../../assets/eye.png')}
                                /> :
                                <Image
                                    style={styles.eye2}
                                    source={require('./../../assets/hide.png')}
                                />
                        }
                        <Image

                            source={require('./../../assets/eye.png')}
                        />
                    </TouchableOpacity>

                </View>
                {/* {isButtonPressed && <Text style={styles.erroPass}>Password is not true! Try again</Text>} */}
                {PasswordNotTrue && (
                    <Text style={styles.TextpwNottrue}>
                        Password or Email address is not true. Try Again!
                    </Text>
                )}
                {fullInfo && (
                    <Text style={styles.passwordWrong}>
                        Please fill full information
                    </Text>
                )}


                <TouchableOpacity
                    onPress={onPressLogin}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonLabel}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainerGG}

                >
                    <Image
                        style={styles.logogg}
                        source={require('./../../assets/google.png')}
                    />
                    <Text style={styles.buttonLabelGG}>Sign with Google</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.textRegister}>
                <Text style={styles.textacc}>Don't have account? Click</Text>
                <Text style={styles.textClick} onPress={gotoRegister}>Register</Text>
            </View>
            <View style={styles.textRegister}>
                <Text style={styles.textacc}>Forget Password? Click</Text>
                <Text style={styles.textClick}>Reset</Text>
            </View>
        </View>
    );
};


export default Login;
