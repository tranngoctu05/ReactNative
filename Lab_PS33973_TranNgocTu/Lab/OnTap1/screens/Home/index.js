import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
const Home = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 1,
    },
  ]
  const renderItem = ({ item }) => {
    const { id } = item;

    <Image source={{ uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_21.jpg' }} style={styles.itemImage} />
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgHome} source={require('./../../logoHome.png')} />
        <Image style={styles.imgHome} source={require('./../../Setting.png')} />
      </View>
      <View style={styles.header}>

        <Text style={styles.textCate}>Categories</Text>
        <Text style={styles.textSee}>See more</Text>


      </View>
      <View style={styles.header}>

        <Text style={styles.textCate}>Recommended For You</Text>
        <Text style={styles.textSee}>See more</Text>


      </View>
      <FlatList
        style={styles.Flatlistcontainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.product_id}
      />

    </View>
  )
}

export default Home