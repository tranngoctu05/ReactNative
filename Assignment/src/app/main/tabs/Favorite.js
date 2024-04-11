import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'

const Favorite = (props) => {
  const { navigation } = props;
  const { favoriteProducts, setFavoriteProducts } = useContext(AppContext);
  // const payment=navigation.navigate('Payment')

  const renderItem = ({ item }) => {
    const { product_id, product_name, product_price, product_image } = item;
    return (

      <TouchableOpacity style={styles.containerItem}  onPress={() => navigation.navigate('Detail', {
        _id: item.product_id
      })}>
        <Image source={{ uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_21.jpg' }} style={styles.itemImage} />
        <Text style={styles.name}>{product_name}</Text>
        <Text style={styles.Textprice}>Price</Text>
        <Text style={styles.price}>{product_price} $</Text>

      </TouchableOpacity>
    )

  };
  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />

      <FlatList
        style={styles.Flatlistcontainer}
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={item => item.product_id}
      />
    
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 240,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top:0,
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

    backgroundColor: '#0C0F14',
  },
  containerItem: {
    height: 154,
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