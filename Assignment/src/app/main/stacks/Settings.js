import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import styles from './style'
import { AppContext } from '../AppContext';

const Settings = (props) => {
  const { navigation } = props;
  const { setIsLogin } = useContext(AppContext);
  const handleLogout = () => {
    setIsLogin(false);
  };
  const gotoDetail = () => {
    navigation.navigate('Personal');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Image
            style={styles.back}
            source={require('./../../../assets/back.png')}
          />

        </TouchableOpacity>

        <Text style={styles.textSetting}>Setting</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <Image
            style={styles.logoitem}
            source={require('./../../../assets/history.png')}
          />
          <Text style={styles.tagName}>
            History
          </Text>

          <Image
            style={styles.arrow}
            source={require('./../../../assets/next.png')}
          />
        </View>
        <TouchableOpacity onPress={gotoDetail} >
          <View style={styles.item}>
            <Image
              style={styles.logoitem}
              source={require('./../../../assets/person.png')}
            />
            <Text style={styles.tagName}>
              Person Detail
            </Text>

            <Image
              style={styles.arrow}
              source={require('./../../../assets/next.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.item}>
          <Image
            style={styles.logoitem}
            source={require('./../../../assets/address.png')}
          />
          <Text style={styles.tagName}>
            Address
          </Text>
          <Image
            style={styles.arrow}
            source={require('./../../../assets/next.png')}
          />
        </View>
        <View style={styles.item}>
          <Image
            style={styles.logoitem}
            source={require('./../../../assets/payment.png')}
          />
          <Text style={styles.tagName}>
            Payment Method
          </Text>

          <Image
            style={styles.arrow}
            source={require('./../../../assets/next.png')}
          />
        </View>
        <View style={styles.item}>
          <Image
            style={styles.logoitem}
            source={require('./../../../assets/about.png')}
          />
          <Text style={styles.tagName}>
            About
          </Text>

          <Image
            style={styles.arrow}
            source={require('./../../../assets/next.png')}
          />
        </View>
        <View style={styles.item}>
          <Image
            style={styles.logoitem}
            source={require('./../../../assets/help.png')}
          />
          <Text style={styles.tagName}>
            Help
          </Text>

          <Image
            style={styles.arrow}
            source={require('./../../../assets/next.png')}
          />
        </View>
        <TouchableOpacity style={styles.item}  onPress={handleLogout}>
          <Image
            style={styles.logoitem}
            source={require('./../../../assets/logout.png')}
          />
          <Text style={styles.tagName}>
            Log out
          </Text>
          <Image
            style={styles.arrow}
            source={require('./../../../assets/next.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings

