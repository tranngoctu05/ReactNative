import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from '../favourite/styles';

const Favourite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
      <View style={styles.header}>
        <Text style={styles.headercontent}>Favorurite</Text>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          keyExtractor={item => item.key}
          data={DATA}
          renderItem={renderItemProduct}
        />
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btncontent}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
ItemProduct = ({item}) => {
  const {img, name, price, description} = item;
  return (
    <View style={styles.itemcontainer}>
      <Image style={styles.imagecontainer} source={{uri: img}} />
      <View style={styles.containername}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.containerprice}>
        <Text style={styles.price}>{price}</Text>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/Image/backarrow.png')}
        />
      </View>
    </View>
  );
};
renderItemProduct = ({item}) => <ItemProduct item={item} />;

DATA = [
  {
    img: 'https://cooponline.vn/wp-content/uploads/2020/04/nuoc-giai-khat-coca-cola-zero-khong-duong-lon-320ml.jpg',
    name: 'CocaCola',
    description: '325ml,Price',
    price: '$1.25',
  },
  {
    img: 'https://i5.walmartimages.com/asr/eb3bf1c3-5ed4-48a0-b1c6-972987567aa9_1.ab23546aa09cea641ca7dabb9ba83ec1.jpeg',
    name: 'Diet Coke',
    description: '325ml,Price',
    price: '$1.25',
  },
  {
    img: 'https://i5.walmartimages.com/asr/86a57475-a996-4257-b1fb-157eab4c3a06_1.ffeddec2690551fa6d55dba56e94c82c.jpeg',
    name: 'Apple & Grape juice',
    description: '325ml,Price',
    price: '$1.25',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.M8FQ9_ymytj49COdc3j9UAHaKR&pid=Api&P=0&h=220',
    name: 'Pepsi Can',
    description: '325ml,Price',
    price: '$1.25',
  },
  {
    img: 'https://cooponline.vn/wp-content/uploads/2020/04/nuoc-giai-khat-coca-cola-zero-khong-duong-lon-320ml.jpg',
    name: 'CocaCola',
    description: '325ml,Price',
    price: '$1.25',
  },
];

export default Favourite;
