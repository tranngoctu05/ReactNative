import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {groceries} from './product';

const Groceries = () => {
  const backgroundColors = [
    'rgba(83, 177, 117, 0.10)',
    'rgba(248, 164, 76, 0.10)',
    'rgba(247, 165, 147, 0.25)',
    'rgba(211, 176, 224, 0.25)',
    'rgba(253, 229, 152, 0.25)',
    'rgba(183, 223, 245, 0.25)',
  ];

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View
          style={[
            styles.frameproduct,
            {
              backgroundColor:
                backgroundColors[index % backgroundColors.length],
            },
          ]}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.imageproduct} source={item.photo} />
          </View>
          <View style={styles.spnameproduct}>
            <Text style={styles.name}>{item.name}</Text>
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
        data={groceries}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameproduct: {
    width: 250,
    height: 107,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'justify-content',
    flexDirection: 'row',
    marginStart: 10,
  },
  imageproduct: {
    width: 73,
    height: 73,
    resizeMode: 'contain',
    top: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  spnameproduct: {
    width: '100%',
    marginStart: 20,
    justifyContent: 'center',
  },
});

export default Groceries;
