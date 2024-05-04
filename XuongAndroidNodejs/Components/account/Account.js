import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './style'
const Account = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('./../../Image/avt.png')}
        />
        <View style={styles.info}>
          <View style={styles.ten}>
            <Text style={styles.name}>
              Afsar Hossen
            </Text>
            <Image
              style={styles.edit}
              source={require('./../../Image/rename.png')}
            ></Image>
          </View>
          <Text style={styles.gmail}>
            trantu123@gmail.com
          </Text>
        </View>
      </View>
      <View styles={styles.content}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/order.png')}
            />
          </View>

          <Text style={styles.nametask}>
            Order
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/mydetail.png')}
            />
          </View>

          <Text style={styles.nametask}>
            My Detail
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/address.png')}
            />
          </View>

          <Text style={styles.nametask}>
            Delivery Address
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/payment.png')}
            />
          </View>

          <Text style={styles.nametask}>
            Payment Methods
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/Promo.png')}
            />
          </View>

          <Text style={styles.nametask}>
            Promo Cord
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/bell.png')}
            />
          </View>

          <Text style={styles.nametask}>
            Notifecations
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/help.png')}
            />
          </View>

          <Text style={styles.nametask}>
            Help
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon}
              source={require('./../../Image/about.png')}
            />
          </View>

          <Text style={styles.nametask}>
            About
          </Text>
          <Image
            style={styles.arrowRight}
            source={require('./../../Image/backarrow.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogout}>
            <View style={styles.imgLogout}>

              <Image style={styles.imgLog}
                source={require('./../../Image/logout.png')}
              />
            </View>

            <Text style={styles.textLogout}>Log Out</Text>
          </TouchableOpacity>

        </View>


      </View>
    </View>
    </ScrollView>

  )
}

export default Account