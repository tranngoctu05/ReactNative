import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, TextInput, ScrollView, RefreshControl, StatusBar } from 'react-native';

const Lab4 = () => {

    const [color, setColor] = useState('#EEEEEE')

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true);
        setColor('#5383EC')

        setTimeout(() => {
            setRefreshing(false)
            setColor('#CCFF99');
        }, 3000)
    }


    const data = [
        {
            name: 'Trần Công Chính',
            phone: '0333845232',
            position: 'Developer',
            photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
        },
        {
            name: 'Nguyễn Minh Nhựt',
            phone: '0333845232',
            position: 'Developer',
            photo: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/366951547_963873168001490_5844081063537264814_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHBtbESaCeGN5FmqYgAW23d78uKUXrriUfvy4pReuuJRxaWHoIjyBVJ78HnvORuj4JH0qL6CxPfq5BPtH9yPJrD&_nc_ohc=V-_yBUMqUjIAX-ZL2M7&_nc_ht=scontent-hkg4-2.xx&oh=00_AfArASZ9gXw1R8fx530Px1jfw3kTgc951J1sOABt5Y8H0g&oe=65AE5FB3',
        },
        {
            name: 'Phạm Ngọc Quốc Khánh',
            phone: '034566544565',
            position: 'Developer',
            photo: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/180870360_1106226636522037_1312934149752936232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHYjiDM18iyMFg8GYL-Mo6-lyBpydK7_4eXIGnJ0rv_h9mIniVX9p_CHxHM-gXbicGpEJTga3L-PHPgQQZF1K4_&_nc_ohc=HSFPwjEBS6kAX9KtpBT&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCMXapVn05L5K7aHC5AfKr4vED7ewmBA4W106pWZY0h5Q&oe=65CFDBE3',
        },
        {
            name: 'Trần Ngọc Tú',
            phone: '02345654345',
            position: 'Developer',
            photo: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/387730613_1740454526373018_1544210941264870505_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFxsr6dl4A9EcTBj-EQV1jQADxeq-o_2HoAPF6r6j_YetMhwAqgYwqkZgkfcUQppcJv_1n_bTLZPHXS1A1ORK7N&_nc_ohc=Su6lQQc05u0AX_ca0C2&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfB_Iq6GyOKBfW9qLQaFMp_9b8MZHmO-0XTE7Ek-60ykDw&oe=65AD27E9',
        },
       
        {
            name: 'Lương Hữu Nhất',
            phone: '0333845232',
            position: 'Developer',
            photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
        },
        {
            name: 'Huỳnh Văn Khánh',
            phone: '0333845232',
            position: 'Developer',
            photo: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/118462747_345991356433763_5200413787458047286_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFc6Bi36kbYky9S2bXkvxI5qC8-d2iU8uaoLz53aJTy5nHVqBKv5LpjedELJ2ZQoSplsXbeldPsZx32dAs_oVZ_&_nc_ohc=wTbyhuSv_MQAX9HTK8-&_nc_ht=scontent.fhan3-5.fna&oh=00_AfDUAaE5eCKAKg8_dFE5XNFLURT1jIRrW03shQIbQWfrQA&oe=65D0868E',
        }, {
            name: 'Nguyễn Minh Nhựt',
            phone: '0333845232',
            position: 'Developer',
            photo: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/366951547_963873168001490_5844081063537264814_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHBtbESaCeGN5FmqYgAW23d78uKUXrriUfvy4pReuuJRxaWHoIjyBVJ78HnvORuj4JH0qL6CxPfq5BPtH9yPJrD&_nc_ohc=V-_yBUMqUjIAX-ZL2M7&_nc_ht=scontent-hkg4-2.xx&oh=00_AfArASZ9gXw1R8fx530Px1jfw3kTgc951J1sOABt5Y8H0g&oe=65AE5FB3',
        },
    ];

    const ContactItem = ({ contact }) => (
        <View style={styles.listItem}>
            <View style={styles.containerClass}>
                <Image source={{ uri: contact.photo }} style={styles.avatar} />
                <View style={styles.bodyItem}>
                    <Text style={styles.name}>{contact.name}</Text>
                    <Text>{contact.position}</Text>
                </View>
                <TouchableOpacity style={styles.btnCall}>
                    <Text style={styles.callText}>Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: color, padding: 15, }}>
            {
                refreshing 
            }
            <View style={styles.container}>
            </View>
            <FlatList
              
                refreshing ={ refreshing}
                onRefresh={onRefresh}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                  data={data}
                renderItem={({ item }) => <ContactItem contact={item} />}
                keyExtractor={(item) => item.phone}
                
                
            />
        </View>

    );
};

const styles = {
    containertongg: {
        width: '100%',
        height: '100%',
        padding: 15,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerClass: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
    },
    textFont: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    listItem: {
        padding: 10,
        backgroundColor: '#EEEEEE',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    bodyItem: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnCall: {
        padding: 10,

    },
    callText: {
        color: 'green',
        fontWeight: 'bold',
    },
    containerSearch: {
        width: '100%',
        padding: 20,
        marginTop: 0,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 51,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: 'gray',
    },
    microphoneIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        tintColor: 'gray',
    },
    search: {
        flex: 1,
    },
};

export default Lab4;