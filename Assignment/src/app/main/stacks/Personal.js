import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './stylePerson'
import { AppContext } from '../AppContext';
const Personal = (props) => {
  const { navigation } = props;
  const { user } = useContext(AppContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSave = () => {

  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <View style={styles.toolbar}>
        <Image
          style={styles.back}
          source={require('./../../../assets/back.png')}
        />
        <Text style={styles.textSetting}>Setting</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.hinhanh}>
          <Image
            style={styles.anhdaidien}
            source={require('./../../../assets/Intersect.png')}
          />
        </View>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.name}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
          editable={false}
        />

        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          placeholderTextColor='#828282'
          onChangeText={(text) => setPassword(text)}
          style={styles.password}
        />

        <TextInput
          secureTextEntry={true}
          placeholderTextColor='#828282'
          placeholder='Re-type password'
          onChangeText={(text) => setRetypePassword(text)}
          style={styles.retypepassword}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSave}
        >
          <Text style={styles.buttonLabel}>Save</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default Personal;