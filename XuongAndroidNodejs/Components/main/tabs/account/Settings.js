import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './stype';

const Settings = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require('../../../../assets/Image/avt.png')}
          />
          <View style={styles.info}>
            <View style={styles.ten}>
              <Text style={styles.name}>Afsar Hossen</Text>
              <Image
                style={styles.edit}
                source={require('../../../../assets/Image/rename.png')}></Image>
            </View>
            <Text style={styles.gmail}>trantu123@gmail.com</Text>
          </View>
        </View>
        <View styles={styles.content}>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/order.png')}
              />
            </View>

            <Text style={styles.nametask}>Order</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>

          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/mydetail.png')}
              />
            </View>

            <Text style={styles.nametask}>My Detail</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/address.png')}
              />
            </View>

            <Text style={styles.nametask}>Delivery Address</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/payment.png')}
              />
            </View>

            <Text style={styles.nametask}>Payment Methods</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/Promo.png')}
              />
            </View>

            <Text style={styles.nametask}>Promo Cord</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/bell.png')}
              />
            </View>

            <Text style={styles.nametask}>Notifecations</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/help.png')}
              />
            </View>

            <Text style={styles.nametask}>Help</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/Image/about.png')}
              />
            </View>

            <Text style={styles.nametask}>About</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../../../assets/Image/backarrow.png')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLogout}>
              <View style={styles.imgLogout}>
                <Image
                  style={styles.imgLog}
                  source={require('../../../../assets/Image/logout.png')}
                />
              </View>
              <Text style={styles.textLogout}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
