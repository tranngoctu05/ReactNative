import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from '../../helpers/AsiosInstance';

const Lab8Create = (props) => {
    const { navigation } = props;
    const [name, setname] = useState('')
    const [birthday, setbirthday] = useState('')
    const [avatar, setavatar] = useState('')
    const onPressCreate= async () => {

        try {
            const body={
                name: name,
                birthday: birthday,
                avatar: avatar
            }
            const response = await AxiosInstance().post('/user', body);
            console.log(response)
            navigation.navigate('Lab8List')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <Text>Lab8Create</Text>

            <Text style={styles.textCaption}>Name:</Text>
            <TextInput
                value={name}
                onChangeText={setname}
                style={styles.input}
            >
            </TextInput>
            <Text style={styles.textCaption}>Birthday:</Text>
            <TextInput
                value={birthday}
                onChangeText={setbirthday}
                style={styles.input}
            >
            </TextInput>
            <Text style={styles.textCaption}>Avatar:</Text>
            <TextInput
                value={avatar}
                onChangeText={setavatar}
                style={styles.input}
            >
            </TextInput>

            <TouchableOpacity
            style={styles.save}
            onPress ={onPressCreate}
            >
                <Text>Lưu</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Lab8Create
const styles = StyleSheet.create({
    input: {
        with: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#0C0F14',
        borderRadius: 5,
        paddingLeft: 10,
        marginTop:15,
        marginBottom: 15,
        color: '#0C0F14',
        margin:10,

    },save:{
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        color:'#fff',
        margin:10,
    },
    textCaption:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0C0F14'
    }
})