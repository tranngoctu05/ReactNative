import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import 'react-native-gesture-handler';
import styles from './style'

const Home = ({ navigation }) => {
    const [name, setName] = useState('Tran Ngoc Tu');

    const goToDetails = () => {
        navigation.navigate('Details', { name});
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textContent}>Chào bạn, đây là màn hình chính   </Text>
            <TextInput
                value={name}
                style={styles.input}
                placeholder="Tran Ngoc Tu"
                onChangeText={(text) => setName(text)}

            />
            <View style={styles.button}>
                <Button
                    title="Đi tới màn hình chi tiết"
                    onPress={goToDetails}
                />
        
            </View>

        </View>
    )
}

export default Home