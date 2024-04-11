import { View, Text, StatusBar, TouchableOpacity, Image, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const data = [
    {
        id: 1,
        name: 'Quinoa fruit salad',
    },
    {
        id: 2,
        name: 'Melon fruit salad',
    },
    {
        id: 3,
        name: 'Tropical fruit salad',
    },
]
const renderItem = ({ item }) => {
    const { id, name } = item;
    return (
        <View style={styles.itemContainer}>
            <Image style={styles.imgItem} source={require('./../Baove/img1.png')} />
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemPack}>2packs</Text>
            <Text style={styles.itemPrice}>$20,000</Text>
        </View>

    )
}
const index = () => {
    const [openModal, setOpenModal] = useState(false);
    function renderModal() {
        return (
            <Modal
                visible={openModal}
                animationType='slide'
                transparent={true}
            >
                <View
                    style={styles.modal}
                >
                    <Image style={styles.imgModal} source={require('./../Baove/done.png')} />
                    <TouchableOpacity style={styles.botton2}>
                        <Text style={styles.Order} >Track Order </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton3} onPress={() => setOpenModal(false)}>
                        <Text style={styles.Order2} >Continue shopping </Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        )
    }




    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Image style={styles.imgBack}
                        source={require('./../Baove/back.png')} />
                    <Text style={styles.textBack}>
                        Go back
                    </Text>
                </TouchableOpacity>
                <Text style={styles.textBasket}>My Basket</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.textTotal}>
                    Total
                </Text>
                <Text style={styles.textTotal}>
                    $60,000
                </Text>
                <TouchableOpacity style={styles.botton}>
                    <Text style={styles.TextCheckout} onPress={() => setOpenModal(true)}>Checkout </Text>
                </TouchableOpacity>
            </View>
            {renderModal()}
        </View>
    )
}

export default index