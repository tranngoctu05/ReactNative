import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bgr: {
        flex: 6,
        overflow: 'hidden',

    },
    body: {
        flex: 4,
        backgroundColor: 'white',
        flexDirection: 'column',
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        position: 'relative',
        zIndex: 1,


    },
    back: {
        height: 54,
        width: 54,
        marginTop: 50,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 300
    },
    star: {
        width: 24,
        height: 24,
        marginTop: 25,
        marginLeft: 100,

    },
    Textcontent: {
        marginRight: 5,
        padding: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },
    footer: {
        height: 60,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,


    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        width: 130,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,

    },
    textButton: {
        fontWeight: 'bold',
        color: 'blue',

    },
    textTien: {
        color: '#fff',
        fontWeight: 'bold'
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,

    },
    map: {
        height: 34,
        width: 34,

    },
    nameAddress: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        marginLeft: 10,

    },
    info: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20,

    },
    textContent: {
        padding: 20,

    }
    , heart: {
        position: 'absolute',
        marginLeft: 330,
        marginTop: 460,
        width: 55,
        height: 55,
    }

});
export default styles;