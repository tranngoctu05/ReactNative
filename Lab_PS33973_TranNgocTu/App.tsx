import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styles from './AppStyle';
import Lab1 from './Lab/Lab1/index'
import Lab2 from './Lab/Lab2/index'
const App = () => {



  return (
    <View style={styles.container}>
    <View style={styles.taskbar}>
<Text style={styles.ten}>Lab_PS33973_Trần Ngọc Tú</Text>
    </View>
<View style={styles.body}>
<Lab2/>
</View>

    </View>

  )
}

export default App;
