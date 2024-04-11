import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';

const Lab8List = (props) => {
    const { navigation } = props;
    const [users, setusers] = useState([])
    const [isDelete, setisDelete] = useState(false)

    useFocusEffect(
        useCallback(() => {
            const getUser = async () => {
                try {
                    const response = await fetch('https://65bb509652189914b5bbb619.mockapi.io/user')
                    const data = await response.json();
                    setusers(data);
                    setisDelete(false)
                } catch (error) {
                    console.log(error)
                }
            }
            getUser()
        }, [isDelete])
    );
    const onPressDelete = async (id) => {
        try {
            const response = await fetch(`https://65bb509652189914b5bbb619.mockapi.io/user/${id}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            setisDelete(true)
        } catch (error) {
            console.log(error)
        }

    }
    const renderItem = ({ item }) => {
        const { id, name, avatar, birthday } = item;
        const formatBirthday = (birthday) => {
            const date = new Date(birthday);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text>{formatBirthday(birthday)}</Text>
                <TouchableOpacity style={styles.buttonUpdate} onPress={() => navigation.navigate('Lab8Update', { id: id })} >
                    <Text style={styles.text}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDelete} onPress={() => onPressDelete(id)}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View>
            <TouchableOpacity style={styles.themContainer} onPress={() => navigation.navigate('Lab8Create')} >

                <Text style={styles.textThemtv}>Thêm thành viên mới</Text>
            </TouchableOpacity>
            <FlatList
                data={users}
                renderItem={renderItem}

                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Lab8List
const styles = StyleSheet.create({
    themContainer: {
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,


    },
    textThemtv: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemContainer: {

        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#0C0F14',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        height: 150,

    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonUpdate: {
        position: 'absolute',
      
        width: '20%',
        height: 50,
        top: 50,
        left: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '10%',
        color:'#fff',
    },
    buttonDelete: {
        position: 'absolute',
        width: '20%',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '10%',
        top: 50,
        right: 20,
    }
    ,
    text:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})