import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
const Search = () => {
  const backgroundColors = [
    'rgba(83, 177, 117, 0.10)',
    'rgba(248, 164, 76, 0.10)',
    'rgba(247, 165, 147, 0.25)',
    'rgba(211, 176, 224, 0.25)',
    'rgba(253, 229, 152, 0.25)',
    'rgba(183, 223, 245, 0.25)',
  ];
  const borderColor = [
    'rgba(83, 177, 117, 0.70)',
    'rgba(248, 164, 76, 0.70)',
    '#F7A59',
    '#D3B0E0',
    '#FDE598',
    '#B7DFF5',
  ];

  const data = [
    {
      name: 'Fresh Fruits & Vegetable',
      photo: require('../../../../assets/Image/Frashfruits.png'),
    },
    {
      name: 'Cooking Oil & Ghee',
      photo: require('../../../../assets/Image/cooking.png'),
    },
    {
      name: 'Meat & Fish',
      photo: require('../../../../assets/Image/meat.png'),
    },
    {
      name: 'Bakery & Snacks',
      photo: require('../../../../assets/Image/Bakery.png'),
    },
    {
      name: 'Dairy & Eggs',
      photo: require('../../../../assets/Image/egg.png'),
    },
    {
      name: 'Beverages',
      photo: require('../../../../assets/Image/Beverages.png'),
    },
    {
      name: 'Fresh Fruits & Vegetable',
      photo: require('../../../../assets/Image/Frashfruits.png'),
    },
    {
      name: 'Cooking Oil & Ghee',
      photo: require('../../../../assets/Image/cooking.png'),
    },
    {
      name: 'Meat & Fish',
      photo: require('../../../../assets/Image/meat.png'),
    },
    {
      name: 'Bakery & Snacks',
      photo: require('../../../../assets/Image/Bakery.png'),
    },
    {
      name: 'Dairy & Eggs',
      photo: require('../../../../assets/Image/egg.png'),
    },
    {
      name: 'Beverages',
      photo: require('../../../../assets/Image/Beverages.png'),
    },
  ];

  const ContactItemList = ({contact, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.container1,
          {
            backgroundColor: backgroundColors[index % backgroundColors.length],
            borderColor: borderColor[index % borderColor.length],
          },
        ]}>
        <Image source={contact.photo} style={styles.avatar} />
        <Text style={styles.name}>{contact.name} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contaifind}>
        <Text style={styles.findtext}>Find Products</Text>
      </View>
      <View style={styles.containersearch}>
        <View style={styles.searchWrapper}>
          <Image
            source={require('../../../../assets/Image/ic_search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search Store"
            clearButtonMode="always"
            style={styles.search}
          />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ContactItemList contact={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default Search;
