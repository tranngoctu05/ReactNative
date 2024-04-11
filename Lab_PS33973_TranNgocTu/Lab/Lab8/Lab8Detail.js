import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import AxiosInstance from '../../helpers/AsiosInstance';

const Lab8Detail = (props) => {
    const { navigation } = props;
    const [name, setname] = useState('')
    const [birthday, setbirthday] = useState('')
    const [avatar, setavatar] = useState('')
    const id=props?.route?.params?.id;


    useEffect(() => {
        const getUser= async () => {
            try{
            const response= await AxiosInstance().get(`/user/${id}`);
            console.log(response);
            // const data = response.data;
            setname(response.name);
            setbirthday(response.birthday);
            setavatar(response.avatar);

        }catch(error){

        } 
    }
    getUser();
},
[id])

    const onPressUpdate= async () => {

        try {
            const body={
                name: name,
                birthday: birthday,
                avatar: avatar
            }
            const response = await AxiosInstance().put(`/user/${id}`, body);
            console.log(response)
            navigation.navigate('Lab8List')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <Text>Lab8Update</Text>
            <TextInput
                value={name}
                onChangeText={setname}
                style={styles.input}
            >
            </TextInput>
            <TextInput
                value={birthday}
                onChangeText={setbirthday}
                style={styles.input}
            >
            </TextInput>
            <TextInput
                value={avatar}
                onChangeText={setavatar}
                style={styles.input}
            >
            </TextInput>

            <TouchableOpacity
            onPress ={onPressUpdate}
            >
                <Text>Lưu</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Lab8Detail
const styles = StyleSheet.create({
    input: {
        with: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#0C0F14',
        borderRadius: 5,
        paddingLeft: 10,
    }
})