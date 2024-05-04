import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { exclusiveOffers } from './product';

const Exclusiveoffer = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.frameproduct}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.imageproduct} source={item.photo} />
          </View>
          <View style={styles.spnameproduct}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.kilogram}>{item.kilograms}</Text>
          </View>
          <View style={styles.containerprice}>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity style={styles.buttonadd}>
              <Image
                style={styles.imgcart}
                source={require('../../../../assets/Image/add.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={exclusiveOffers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} 
      />
    </View>
  );
};
const styles = StyleSheet.create({
  frameproduct: {
    margin: 7,
    width: 174,
    height: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  imageproduct: {
    width: 113,
    height: 82,
    resizeMode: 'contain',
    top: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    top: 20,
    marginBottom: 10,
  },
  spnameproduct: {
    width: '100%',
    height: 62,
    top: 20,
  },
  kilogram: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    top: 20,
    opacity: 0.48,
  },
  containerprice: {
    width: '100%',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    top: 10,
  },
  buttonadd: {
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 14.5,
  },
  imgcart: {
    width: 20,
    height: 20,
  },
});

export default Exclusiveoffer;
