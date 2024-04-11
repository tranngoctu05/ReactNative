import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import AxiosInstance from '../helpers/AsiosInstance'

const Register = (props) => {
    const [securePassword, setSecurePassword] = useState(true);
    const { navigation } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [koGiong, setkoGiong] = useState(false)
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [fullInfo, setfullInfo] = useState(false)
    const [testEmail, settestEmail] = useState(false)
    const onPressRegister = async () => {
        try {
            if (name == '' || email == '' || password == '' || retypePassword == '') {
                setfullInfo(true);
                return;
            } setfullInfo(false);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                settestEmail(true);
                return;
            } settestEmail(false);
            if (password !== retypePassword) {
                setkoGiong(true);
                return;
            } setkoGiong(false);

            const body = {
                email: email,
                password: password,
                name: name,
            }
            const response = await AxiosInstance()
                .post('/users/register', body);
            console.log(response);
            if (response.status == true) {
                // chuyển qua login
                navigation.navigate('Login');
            } else {
                Alert.alert('Đăng ký không thành công');
            }
        } catch (error) {
            console.log('Đăng ký có lỗi: ', error);
            Alert.alert('Đăng ký có lỗi');
        }

    }
    const gotoLogin = () => {
        navigation.navigate('Login');
    };
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
                    Register to continue
                </Text>
                <TextInput
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder='Name'
                    placeholderTextColor='#828282'
                    style={styles.input} />
                <TextInput
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#828282'
                    style={styles.input2} />
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry={securePassword}
                        placeholder='Password'
                        placeholderTextColor='#828282'
                        style={styles.input2} />
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
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        onChangeText={text => setRetypePassword(text)}
                        value={retypePassword}
                        secureTextEntry={securePassword}
                        placeholder='Re-type password'
                        placeholderTextColor='#828282'
                        style={styles.input2} />
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

                {fullInfo && (
                    <Text style={styles.passwordWrong}>
                        Please fill full information
                    </Text>
                )}
                {koGiong && (
                    <Text style={styles.passwordWrong}>
                        Password is not true. Try Again!
                    </Text>
                )}
                {testEmail && (
                    <Text style={styles.passwordWrong}>
                        Email is not true. Try Again!
                    </Text>
                )}

                <TouchableOpacity
                    onPress={onPressRegister}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonLabel}>Register</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.textRegister}>
                <Text style={styles.textacc}>You have an account? Click</Text>
                <Text style={styles.textClick} onPress={gotoLogin}>Login</Text>
            </View>


        </View>

    )
}

export default Register;
