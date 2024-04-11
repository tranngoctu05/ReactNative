import React from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import styles from './style';

const Detail = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text>{`Hello ${name}!`}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Reset" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })} />
      <Button title="Pop" onPress={() => navigation.pop()} />
      <Button title="Pop to Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Detail;
