import { View, Text, Image, StatusBar, TouchableOpacity, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react'
import styles from './style'
import AxiosInstance from '../../helpers/AsiosInstance';
import { AppContext } from '../AppContext';
const Payment = (props) => {
  const { navigation } = props;
  const { cart, setCart, user } = useContext(AppContext);
  // tính tổng tiền
  const total = cart.reduce((total, item) => {
    return total + item.product_quantity * item.product_price;
  }, 0);

  const callAPI = async () => {
    try {
      const body = {
        // email từ context
        email: user.email,
        carts: cart,
      }
      const response = await AxiosInstance().post('/carts', body);
      console.log('Thanh toán thành công: ', response);
      if (response.status == true) {
        // xóa giỏ hàng
        setCart([]);
        // chuyển về trang chủ
        navigation.navigate('Home');
      }
    } catch (error) {

    }
  }

  const payment = () => {
    // xác nhận thanh toán
    Alert.alert(
      "Thông báo",
      "Bạn có muốn thanh toán hay không?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Đồng ý", onPress: callAPI
        }
      ],
      { cancelable: false }
    );
  }

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

        <Text style={styles.textSetting}>Payment</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.card}
          source={require('./../../../assets/cardPayment.png')} />
        <Image
          style={styles.visa}
          source={require('./../../../assets/visacard.png')} />
        <Text style={styles.visatext}>Credit Card</Text>
        <Image
          style={styles.wallet}
          source={require('./../../../assets/wallet.png')} />
        <Image
          style={styles.wallet}
          source={require('./../../../assets/googlePay.png')} />
        <Image
          style={styles.wallet}
          source={require('./../../../assets/applePay.png')} />
        <Image
          style={styles.wallet}
          source={require('./../../../assets/amazonePay.png')} />

        <View style={styles.totalPrice}>
          <Text style={styles.textTotal}>Total Price</Text>
          <Text style={styles.Totalprice}>{total} $</Text>
          <TouchableOpacity style={styles.button} onPress={payment} >
            <Text style={styles.addtocart}>Pay from Credit Card</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Payment;

