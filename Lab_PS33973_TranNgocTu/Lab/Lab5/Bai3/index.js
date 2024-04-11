import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './../Bai3/style'
const index = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
     
            <ImageBackground
                style={styles.bgr}
                source={{ uri: 'https://i.pinimg.com/236x/c7/98/e3/c798e3d9c311b74b0dd4672d60025136.jpg' }}
            >
                <Image
                    style={styles.back}
                    source={require('./../../Img/back.png')}
                />
                <View style={styles.content}>
                    <Text style={styles.Textcontent}>
                        PHỐ CỔ HỘI AN
                    </Text>
                    <Image
                        style={styles.star}
                        source={require('./../../Img/star.png')}
                    />
                    <Text style={styles.Textcontent}>
                        5.0
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.body}>
                <View style={styles.address}>
                    <Image
                        style={styles.map}
                        source={require('./../../Img/map.png')}
                    />
                    <Text style={styles.nameAddress}>
                        Quảng Nam
                    </Text>
                </View>
                <Text style={styles.info}>Thông tin chuyến đi</Text>
                <Text style={styles.textContent}>
                    Hội An – nơi mà cuộc sống cứ bình lặng như thế. Hội An – nơi mà dường như dòng chảy vô tình của thời gian chẳng thể nào vùi lấp đi cái không khí cổ xưa. Những mái ngói cũ phủ đầy rêu phong, những con đường ngập trong sắc đỏ của đèn lồng, những bức hoành phi được chạm trổ tinh vi, tất cả như đưa ta về với một thế giới của vài trăm năm trước. Đó mới chỉ là một phần dung dị ở khu phố cổ Hội An nhưng cũng đã đủ khiến người ta phải đắm say, đi quên lối. Bài viết Giới thiệu về phố cổ Hội An giúp bạn có cái nhìn rõ nét hơn về Hội An.
                </Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textTien}>$100/Ngày</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Image style={styles.heart} source={require('./../../Img/heart.png')}/>

        </View>
    )
}

export default index