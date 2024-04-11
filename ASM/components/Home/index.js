
import React, { useState } from 'react';
import { View, Text, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import styles from './style';
const WIDTH = Dimensions.get('window').width;
const imageSlider = [
  'https://cdn.pixabay.com/photo/2017/04/19/13/03/coffee-2242213_640.jpg',
  'https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_640.jpg',
  'https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_640.jpg'
]

const Home = () => {
  const [imgActive, setimgActive] = useState(0);
  onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != imgActive) {
        setimgActive(slide)
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentTop}>
        <View style={styles.header}>
          <View style={styles.search}>
            <TextInput
              style={styles.inputSearch}
              placeholder='What do you like drink today?'
            />
            <View style={styles.iconContainer}>
              <Image
                style={styles.iconSearch}
                source={require('./../../Img/fi_search.png')}
              />
            </View>
          </View>
          <View style={styles.notification}>
            <Image
              style={styles.iconNotifi}
              source={require('./../../Img/fi_Bell_light.png')}
            />
          </View>

        </View>

        <View style={styles.slider}>
          <ScrollView
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {
              imageSlider.map((e, index) =>

                <Image
                  key={e}
                  resizeMode='stretch'
                  style={{ width: WIDTH, height: 300, borderRadius: 8, }}
                  source={{ uri: e }}
                >

                </Image>
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              imageSlider.map((e, index) =>
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ⬤
                </Text>

              )
            }
          </View>
        </View>
        

      </View>
    </View>
  );
};

export default Home;