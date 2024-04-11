import { StyleSheet } from "react-native";
import color from './../../constants/color'
const styles = StyleSheet.create({
    signinRegister: {
        marginTop: 20,
    },

    orther: {
        marginTop: 40,
        marginHorizontal: 20,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    logogg: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 20,
        width: 20
    },
    buttonLabelGG: {
        flex: 15,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    buttonContainerGG: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white',
        width: '100%',
        marginTop: 25,
        borderRadius: 10,
        borderColor: '#d0d0d0',
        borderWidth: 1,

    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#cacaca',
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
        borderColor: 'd0d0d0',

    },
    buttonLabel: {
        color: 'white',
        fontSize: 27,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    contents: {

        marginTop: 120,
        marginHorizontal: 20
    },
    logo: {
        marginHorizontal: 55.75,
        width: 219.5,
        height: 100
    },

    container: {
        backgroundColor: 'white',
    },
    inputEmail: {
        marginTop: 32,
        height: 48,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        paddingHorizontal: 20,

    },
    inputPassword: {
        marginTop: 32,
        height: 48,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        paddingHorizontal: 20,

    }
})
export default styles;