import { ScrollView, StyleSheet, Text, View, StatusBar, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from './../../helpers/AsiosInstance.js'
const Home = (props) => {
  const { navigation } = props;
  //danh sách danh mục
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // danh sách sản phẩm theo danh mục
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get('/categories');
        setCategories(response.categories);
        setSelectedCategory(response.categories[0]._id);
      } catch (error) {
        console.log('Lấy danh sách danh mục lỗi', error);
      }
    }
    getCategories();
  }, [])

  const [selectedItem, setSelectedItem] = useState('65b07ddcfc13ae4836b4cb0f');
  const renderItem = ({ item }) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity
        style={[styles.item, selectedItem === _id && styles.selectedText]}
        onPress={() => setSelectedItem(item._id)}>
        <Text style={[styles.title, selectedItem === _id && styles.selectedText]}>
          {name}
        </Text>
        <View style={styles.dotContainer}>
          <Text style={[styles.dot, selectedItem === _id && styles.selectedText]}>⬤</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // lấy danh sách sản phẩm thuộc danh mục dc chọn
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!selectedCategory) return;
        const response = await AxiosInstance()
          .get(`/products?category=${selectedCategory}`);
        // console.log('Lấy sản phẩm thành công: ', response);
        setProducts(response.products);
        // console.log(products);
      } catch (error) {
        console.log('Lấy danh sách sản phẩm lỗi', error);
      }
    }
    getProducts();
  }, [selectedCategory]);

  const renderProductItem = ({ item }) => {
    const { _id, name, price, image, rating } = item;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {
          _id: item._id
        })}
      >
        <View style={styles.containerItem}>
          <Image source={{ uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_21.jpg' }} style={styles.itemImage} />
          <Text style={styles.nameItem} numberOfLines={1}>{name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {price} $
            </Text>

          </View>
          <View style={styles.AddContainer}>
            <Image source={require('./../../../assets/add.png')} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
            <Image
              style={styles.iconHeader}
              source={require('./../../../assets/vuong.png')}
            />
          </TouchableOpacity>

          <Image
            style={styles.iconHeader}
            source={require('./../../../assets/Intersect.png')}
          />
        </View>
        <View style={styles.caption}>
          <Text style={styles.textCaption}>Find the best coffee for you</Text>
        </View>
        <View style={styles.search}>
          <Image source={require('./../../../assets/search-normal.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Find Your Coffee..."
            placeholderTextColor='#52555A'
          />
        </View>
        <View style={styles.Flatlistcontainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={renderProductItem}
          keyExtractor={item => item._id}
        />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={renderProductItem}
          keyExtractor={item => item._id}
        />
      </ScrollView>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  AddContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  price: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 25,
    marginLeft: 10,

  },
  nameItem: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 10,


  },
  itemImage: {
    width: 126,
    height: 126,
    margin: 10,
    borderRadius: 15,
  },
  containerItem: {
    borderRadius: 15,
    marginTop: 23,
    width: 149,
    height: 245,
    backgroundColor: '#252A32',
    marginLeft: 22,
  },
  dotContainer: {
    alignItems: 'center',
    marginTop: 5,
  },

  dot: {
    color: '#0C0F14',
    fontSize: 12,
  },
  Flatlistcontainer: {
    marginTop: 23

  },
  title: {
    color: '#52555A',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,

  },
  item: {
    marginHorizontal: 19,


  },
  input: {
    paddingHorizontal: 18,
  },
  icon: {
    marginLeft: 18,

  },
  search: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141921',
    borderRadius: 15,
    width: 330,
    height: 45,

  },
  selectedText: {
    color: '#D17842' // Màu chữ khi được chọn
  },
  header: {
    flexDirection: 'row',
    marginTop: 59,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    paddingHorizontal: 10,

  },
  iconHeader: {
    borderRadius: 8,
    height: 30,
    width: 30
  },
  textCaption: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 36,

  },
  caption: {
    height: 72,
    width: 195,
    marginTop: 28,

  }


})