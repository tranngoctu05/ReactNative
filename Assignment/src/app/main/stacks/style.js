import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    textSetting: {
        flex: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 25
    },
    back: {
        width: 30,
        height: 30,
        marginLeft: 15,
    },
    container: {
        flex: 1,

        backgroundColor: 'black'
    },
    toolbar: {
        marginTop: 59,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    content: {
        marginTop: 40,

    },
    item: {
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,

    },
    tagName: {
        marginLeft: 30,
        fontSize: 16,
        textAlign: 'left',
        flex: 7,
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'Poppins'



    },
    logoitem: {
        marginLeft: 20,
        height: 17,
        width: 17,

    },
    arrow: {
        marginRight: 20,
        height: 20,
        width: 10,
    },
    visa: {
        position: 'absolute',
        marginLeft: 37,
        marginTop: 37,




    }, card: {
        marginLeft: 25,

    }, visatext: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left',
        marginLeft: 45,
        position: 'absolute',
        marginTop: 5,

    },
    wallet: {
        marginTop: 20,
        marginLeft: 28,

    },
    totalPrice: {
        marginTop: 150,
        bottom: 0,
        width: '100%',
        height: 80,

    },
    addtocart: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 20,
        textAlign: 'center',

    },
    textTotal: {
        color: '#aeaeae',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 20,
        marginLeft: 30,

    },
    Totalprice: {
        color: 'white',
        marginLeft: 50,
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 20,
        marginTop: 10,
    },
    button: {
        position: 'absolute',
        width: 240,
        height: 60,
        backgroundColor: '#D17842',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 20,

    },
})
export default styles;