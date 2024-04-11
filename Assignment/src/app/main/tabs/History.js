import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'

const History = (props) => {
  const { navigation } = props;
  const { cart, setCart, user } = useContext(AppContext);
  const [history, setHistory] = useState(user?.carts);
  console.log('History Data:', history);


  const renderItem = ({ item }) => {
    const orderDate = new Date(item.created_at).toLocaleDateString();

    return (
      <View style={styles.containerItem}>
        <Text style={styles.orderDate}>Order Date: {orderDate}</Text>
        {item.products.map((product) => (
          <View key={product.product_id}>
            <Image source={{ uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_21.jpg' }} style={styles.itemImage} />
            <Text style={styles.name}>{product.product_name}</Text>
            <Text style={styles.Textprice}>Price</Text>
            <Text style={styles.price}>{product.product_price} $</Text>
            <Text style={styles.quatitiTx}>Quatity</Text>
            <View style={styles.containerQuantity}>
              <Text style={styles.quantity}>{product.product_quantity}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
          <Image
            style={styles.iconHeader}
            source={require('./../../../assets/vuong.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textOrder}>Order History</Text>
        <Image
          style={styles.iconHeader}
          source={require('./../../../assets/Intersect.png')}
        />
      </View>

      <View style={styles.content}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={history}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  )
}

export default History
const styles = StyleSheet.create({
  orderDate: {
    left: 10,

    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    top: 0,

  },
  textOrder: {
    color: '#fff',
    fontSize: 23,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 36,
  },
  iconHeader: {
    borderRadius: 8,
    height: 30,
    width: 30
  },
  header: {
    flexDirection: 'row',
    marginTop: 59,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    position: 'absolute',
    width: 240,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 20,

  },
  addtocart: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',

  },
  Totalprice: {
    color: 'white',
    marginLeft: 50,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 10,


  },
  textTotal: {
    color: '#aeaeae',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 30,

  },
  totalPrice: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,

  },
  Flatlistcontainer: {
    marginTop: 70,

  },
  buttomcong: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 300,
    marginTop: 110,
  },
  buttomtru: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 200,
    marginTop: 110,
  },
  quantity: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20,
  },
  containerQuantity: {
    position: 'absolute',
    marginLeft: 240,
    marginTop: 110,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: 'black',
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 250,
    marginTop: 70,
  },
  quatitiTx: {
    position: 'absolute',
    color: '#aeaeae',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 160,
    marginTop: 110,
  },
  Textprice: {
    position: 'absolute',
    color: '#aeaeae',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 160,
    marginTop: 70,
  },
  name: {
    position: 'absolute',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 160,
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#0C0F14',
  },
  containerItem: {
    height: 164,
    width: '90%',
    backgroundColor: '#252A32',
    borderRadius: 15,
    marginLeft: '5%',
    marginTop: 10,
  },
  itemImage: {
    width: 126,
    height: 126,
    margin: 15,
    borderRadius: 15,
  }


})