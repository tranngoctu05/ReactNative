import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image
                    style={styles.back}
                    source={require('./../../Img/fi_arrow-left.png')}
                />
                <Text style={styles.textSetting}>Setting</Text>
            </View>
            <View style={styles.content}>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/history.png')}
                />
                <Text style={styles.tagName}>
                    History
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/person.png')}
                />
                <Text style={styles.tagName}>
                    Person Detail
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/address.png')}
                />
                <Text style={styles.tagName}>
                    Address
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/payment.png')}
                />
                <Text style={styles.tagName}>
                    Payment Method
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/about.png')}
                />
                <Text style={styles.tagName}>
                    About
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/help.png')}
                />
                <Text style={styles.tagName}>
                    Help
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
               <View style={styles.item}>
               <Image
                    style={styles.logoitem}
                    source={require('./../../Img/logout.png')}
                />
                <Text style={styles.tagName}>
                    Log out
                </Text>
               
                <Image
                    style={styles.arrow}
                    source={require('./../../Img/Arrow.png')}
                />
               </View>
            </View>
        </View>
    )
}

export default Setting