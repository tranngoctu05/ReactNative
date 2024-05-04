import { StyleSheet } from "react-native";
const transparent = 'rgba(0, 0, 0, 0.5)';
export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 105,
    },
    textCart: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
    },
    Line: {
        width: '100%',
        height: 2,
        backgroundColor: '#E2E2E2',
    },
    imageItem: {

    },
    item: {
        marginTop: 30,
        marginHorizontal: 25,
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        height: 140,


    },
    nameItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
        position: 'absolute',
        left: 138,

    },
    amoutItem: {
        fontSize: 18,
        fontWeight: '400',
        color: '#7C7C7C',
        position: 'absolute',
        left: 138,
        top: 25,
        lineHeight: 20,

    },
    deleteItem: {
        position: 'absolute',
        right: 0,
        width: 14,
        height: 14,
        resizeMode: 'contain',
    },
    exceptAmount: {
        position: 'absolute',
        left: 138,
        top: 55,
    },
    addAmount: {
        position: 'absolute',
        left: 228,
        top: 55,
    },
    amount: {
        position: 'absolute',
        left: 200,
        top: 66,
        fontSize: 18,
        fontWeight: 'bold'
        , color: '#181725'

    },
    price: {
        position: 'absolute',
        right: 0,
        top: 66,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725'
    },
    btncontainer: {
        width: '90%',
        height: 67,
        backgroundColor: '#53B175',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        position: 'absolute',
        marginTop: 750,
        marginHorizontal: '5%'


    },
    btncontent: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
    },
    total: {
        position: 'absolute',
        color: 'white',
        marginLeft: 180,
        fontSize: 14,
        fontWeight: '600',
        backgroundColor: '#489E67'



    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: transparent,
        justifyContent: 'flex-end',

    },
    mainModal: {
        backgroundColor: 'white',
        width: '100%',
        height: 480,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,

    },
    textCheckout: {
        fontSize: 20,
        fontWeight: '700',
        color: '#181725',
        position: 'absolute',
        left: 25,
        top: 30,

    },
    hideModal: {
        position: 'absolute',
        right: 25,
        top: 35,
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#E2E2E2',
        position: 'absolute',
        top: 89,

    },
    delivery: {
        fontSize: 16,
        left: 25,
        top: 109,

    },
    method: {
        position: 'absolute',
        fontSize: 15,
        color: '#181725',
        fontWeight: '600',
        left: 257,
        top: 110,

    },
    arrow: {
        left: 375,
        top: 115,
        position: 'absolute',
    },
    line2: {
        width: '90%',
        height: 1,
        backgroundColor: '#E2E2E2',
        position: 'absolute',
        top: 151,
        marginHorizontal: '5%'
    },
    payment: {
        position: 'absolute',
        fontSize: 16,
        left: 25,
        top: 171,
    },
    cardPayment: {
        position: 'absolute',
        left: 335,
        top: 172,
    },
    arrow2: {
        left: 375,
        top: 172,
        position: 'absolute',
    },
    line3: {
        width: '90%',
        height: 1,
        backgroundColor: '#E2E2E2',
        position: 'absolute',
        top: 213,
        marginHorizontal: '5%'
    },
    promo:{
        position: 'absolute',
        fontSize: 16,
        left: 25,
        top: 233,
    },
    pick:{
        position: 'absolute',
        fontSize: 15,
        color: '#181725',
        fontWeight: '600',
        left: 267,
        top: 233,

    },
    arrow3: {
        left: 375,
        top: 235,
        position: 'absolute',
    },
    line4: {
        width: '90%',
        height: 1,
        backgroundColor: '#E2E2E2',
        position: 'absolute',
        top: 275,
        marginHorizontal: '5%'
    },
    total:{
        position: 'absolute',
        fontSize: 16,
        left: 25,
        top: 295,
    },
    totalPrice:{
        position: 'absolute',
        fontSize: 15,
        color: '#181725',
        fontWeight: '600',
        left: 305,
        top: 295,

    },
    arrow4: {
        left: 375,
        top: 299,
        position: 'absolute',
    },
    line5: {
        width: '90%',
        height: 1,
        backgroundColor: '#E2E2E2',
        position: 'absolute',
        top: 337,
        marginHorizontal: '5%'
    },
    terms:{
        position: 'absolute',
        fontSize: 13,
        left: 25,
        top: 357,
    },
    touch:{
        backgroundColor:'#53B175',
        height:67,
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        position:'absolute',
        marginTop:400,
        marginHorizontal:'5%'
    },
    placeOder:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
    }

})