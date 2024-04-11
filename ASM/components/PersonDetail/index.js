import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const PersonDetail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image
                    style={styles.back}
                    source={require('./../../Img/fi_arrow-left.png')}
                />
                <Text style={styles.textSetting}>Setting</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.hinhanh}>
                    <Image
                        style={styles.anhdaidien}
                        source={require('./../../Img/Phuongly.jpg')}
                    />
                </View>
                <TextInput
                defaultValue='Phuong Ly'
                    style={styles.name} />
                <TextInput
                  defaultValue='lyly@gmail.com'
                    style={styles.email} />

                <TextInput
                    placeholder='Password'
                    style={styles.password} />

                <TextInput
                    placeholder='Re-type password'
                    style={styles.retypepassword} />
  <TouchableOpacity
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonLabel}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default PersonDetail