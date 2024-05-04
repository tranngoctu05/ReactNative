import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const Cart = () => {

  const [openModal, setOpenModal] = useState(false);

  function renderModal() {
    return (
      <Modal
        visible={openModal}
        animationType='slide'
        transparent={true}
      >
        <View
          style={styles.modal}
        >
          <View style={styles.mainModal}>
            <Text style={styles.textCheckout}>Checkout</Text>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Image style={styles.hideModal} source={require('../../../../assets/Image/x.png')} />
            </TouchableOpacity>
            <View style={styles.line}></View>
            <Text style={styles.delivery}>Delivery</Text>
            <Text style={styles.method}>Select Method</Text>
            <Image style={styles.arrow} source={require('../../../../assets/Image/arrow.png')} />
            <View style={styles.line2}></View>
            <Text style={styles.payment}>Payment</Text>
            <Image style={styles.cardPayment} source={require('../../../../assets/Image/card.png')} />
            <Image style={styles.arrow2} source={require('../../../../assets/Image/arrow.png')} />
            <View style={styles.line3}></View>
            <Text style={styles.promo}>Promo Code</Text>
            <Text style={styles.pick}>Pick discount</Text>
            <Image style={styles.arrow3} source={require('../../../../assets/Image/arrow.png')} />
            <View style={styles.line4}></View>
            <Text style={styles.total}>Total Cost</Text>
            <Text style={styles.totalPrice}>$100.00</Text>
            <Image style={styles.arrow4} source={require('../../../../assets/Image/arrow.png')} />
            <View style={styles.line5}></View>
            <Text style={styles.terms}>By placing an order you agree to our
              Terms And Conditions</Text>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.placeOder}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>


      </Modal>
    )

  }

  const DATA = [
    {
      id: '1',
      name: 'Bell Pepper Red',
      amout: '1kg, Pice',
      price: '$4.99',
      image: 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_640.jpg'
    },
    {
      id: '2',
      name: 'Egg Chicken Red',
      amout: '4pcs, Pice',
      price: '$1.99',
      image: 'https://cdn.pixabay.com/photo/2021/02/21/07/42/easter-eggs-6035549_640.jpg'
    },
    {
      id: '3',
      name: 'Organic Bananas',
      amout: '12kg, Pice',
      price: '$3.00',
      image: 'https://cdn.pixabay.com/photo/2015/02/27/17/58/bananas-652497_640.jpg'
    },
    {
      id: '4',
      name: 'Ginger',
      amout: '250gram, Pice',
      price: '$2.99',
      image: 'https://cdn.pixabay.com/photo/2016/10/13/15/50/ginger-1738098_640.jpg'
    },



  ]
  const Item = ({ item }) => {
    const { img, name, price, amout } = item;
    return (
      <View style={styles.item}>
        <Image
          style={styles.imageItem}
          source={require('../../../../assets/Image/cachua.png')} />
        <Text style={styles.nameItem}>{name}</Text>
        <Text style={styles.amoutItem}>{amout}</Text>
        <Image
          style={styles.deleteItem}
          source={require('../../../../assets/Image/delete.png')} />
        <Image
          style={styles.addAmount}
          source={require('../../../../assets/Image/cong.png')} />
        <Image
          style={styles.exceptAmount}
          source={require('../../../../assets/Image/tru.png')} />
        <Text style={styles.amount}>1</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <View style={styles.header}>
        <Text style={styles.textCart}>My Cart</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.Line}>


        </View>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={item => item.id}
        />


      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={() => setOpenModal(true)}>
          <Text style={styles.btncontent}>Go to Checkout</Text>
          <Text style={styles.total}>$12.96</Text>
        </TouchableOpacity>
      </View>
      {renderModal()}
    </View>
  )
}

export default Cart