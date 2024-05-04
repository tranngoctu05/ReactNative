import React, {useState} from 'react';
import {View, TextInput, Image, FlatList, Text, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './style';
import Exclusiveoffer from '../../stacks/product/Exclusiveoffer';
import Groceries from '../../stacks/product/Groceries';
const HomeScreen = () => {
  const images = [
    'https://cdn.chonongsanonline.com/uploads/all/nzldrRQmkncFL6Mh9F8fV114CcbCIiXxGCNjelFz.jpg',
    'https://nongsanvietnhat.com/thumbs/1366x535x1/upload/photo/slider-69890.png',
    'https://khostock.net/wp-content/uploads/2021/01/vector-kho-stock-ks1052.jpg',
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.imagelogo}
          source={require('../../../../assets/Image/Group.png')}
        />
        <View style={styles.contaifind}>
          <Image source={require('../../../../assets/Image/address.png')} />
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
        <View style={styles.Sliderboxcontainer}>
          <SliderBox
            images={images}
            sliderBoxHeight={115}
            sliderBoxWidth={368}
            ImageComponentStyle={{
              borderRadius: 15,
              width: 368,
              height: 115,
            }}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FF5733"
            inactiveDotColor="#CCCCCC"
            paginationBoxStyle={styles.paginationBoxStyle}
            autoplay
            circleLoop
            resizeMode="stretch"
            resizeMethod="auto"
          />
        </View>
        <View style={styles.containerproduct}>
          <View style={styles.productseen}>
            <Text style={styles.nameproduct}>Exclusive Offer</Text>
            <Text style={styles.allproduct}>All</Text>
          </View>
          <View style={styles.productcontainer}>
            <Exclusiveoffer />
          </View>
        </View>
        <View style={styles.containerproduct}>
          <View style={styles.productseen}>
            <Text style={styles.nameproduct}>Best Selling</Text>
            <Text style={styles.allproduct}>All</Text>
          </View>
          <View style={styles.productcontainer}>
            <Exclusiveoffer />
          </View>
        </View>
        <View style={styles.containerproduct}>
          <View style={styles.productseen}>
            <Text style={styles.nameproduct}>Groceries</Text>
            <Text style={styles.allproduct}>All</Text>
          </View>
          <View style={styles.productcontainer}>
            <Groceries />
          </View>
          <View style={styles.productcontainer}>
            <Exclusiveoffer />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
