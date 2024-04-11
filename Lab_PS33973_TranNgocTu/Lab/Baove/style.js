import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 142,
        backgroundColor: '#FFA451',

    },
    back: {
        width: 78,
        height: 31,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        marginTop: 72,
        marginLeft: 24,

    },
    imgBack: {
        height: 20,
        width: 10,
    },
    textBack: {
        fontSize: 16,
        color: '#27214D'
    },
    textBasket: {
        color: "#fff",
        fontSize: 24,
        position: 'absolute',
        marginTop: 72,
        marginLeft: 148,

    },
    itemContainer: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        marginTop: 49,
    },
    imgItem: {
        width: 64,
        height: 64,
        borderRadius: 10,
        position: 'absolute',
        marginLeft: 24,
        marginBottom: 15,

    },
    itemName: {
        marginTop: 5,
        marginLeft: 105,
        fontSize: 16,
        fontWeight: '500',
        color: '#000000'


    },
    itemPack: {
        marginLeft: 105,
        color: '#000000'
    },
    itemPrice: {
        position: 'absolute',
        color: '#000000',
        fontWeight: '500',
        marginLeft: 299,

    },
    footer: {
        position: 'absolute',
        bottom: 56,
        backgroundColor: '#fff',


    },
    textTotal: {
        marginLeft: 25,
        color: '#000000',
        fontWeight: '500',
        fontSize: 16
    },
    botton: {
        width: 199,
        height: 53,
        position: 'absolute',
        backgroundColor: '#FFA451',
        borderRadius: 10,
        marginLeft: 152,
        alignItems: 'center',
        justifyContent: 'center'

    },
    TextCheckout: {
        color: '#fff',
        fontSize: 16,


    },
    modal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',

    },
    Order:{
        color: '#fff',
        fontSize: 16,
    },
    botton2: {
        width: 199,
        height: 53,
        backgroundColor: '#FFA451',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25,

    },
    botton3: {
        width: 199,
        height: 53,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25,
        borderWidth:1,
        borderColor: '#FFA451',

    },
    Order2:{
        color: '#FFA451',
        fontSize: 16,
    },
})

export default styles