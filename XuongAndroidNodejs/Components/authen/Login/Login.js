import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image
                    style={{ width: 47.84, height: 55.64, }}
                    source={require('../../../assets/Image/Group.png')} />
            </View>
            <View>
                <Text style={[styles.text, { fontSize: 20, fontWeight: 'bold', color: 'black' }]}>
                    Loging
                </Text>
            </View>
            <View>
                <Text style={[styles.text1, { fontSize: 15, fontStyle: 'italic' }]}>
                    Enter your emails and password
                </Text>
            </View>

            <View style={styles.input2}>
                <TextInput style={[styles.input, {}]}
                    placeholder='Email' />
                <TextInput style={styles.input}
                    placeholder='Password'
                />
                <TouchableOpacity
                    style={styles.eyeImage}
                // onPress={() => setsecurePass(!setsecurePass)}
                >
                    <Image
                        source={require('../../../assets/Image/Vector1.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.text2, { fontWeight: 'bold', color: 'black' }]} >Forgot Password?</Text>
                </View>
                <TouchableOpacity style={styles.btnDangNhap}>
                    <Text style={styles.txtBtn}>Đăng nhập</Text>
                </TouchableOpacity>

            </View>
            <Text style={[styles.txtBtn, { marginTop: 20, fontWeight: 'bold', }]}>Don’t have an account? Singup</Text>


        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 24,

    },

    text: {
        width: 233,
        height: 59,
        top: 100,
        right: 60,

    },
    text1: {
        width: 233,
        height: 59,
        top: 80,
        right: 60,

    },
    text2: {
        width: 125.49,
        height: 18,
        left: 240,
        top: 8,



    },
    input: {
        width: '110%',
        marginTop: 20,
        borderBottomWidth: 1,
        color: '#ABABAB',
        borderColor: '#ABABAB'
    },
    header: {
        marginTop: 42,
    },
    input2: {
        paddingHorizontal: 24,
        width: '100%',
        marginTop: 56,
        right: 20,

    },
    eyeImage: {
        width: 17,
        height: 16,
        position: 'absolute',
        right: 17,
        top: 105,
    },
    btnDangNhap: {
        backgroundColor: '#66CC99',
        height: 67,
        width: 364,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 35,
        right: 5,


    },
    txtBtn: {
        fontSize: 16,
        color: 'black',
    }


})