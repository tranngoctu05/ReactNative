import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        alignItems: 'center',
    },
    imgRegister: {
        width: 120,
        height: 120,
        marginTop: 60,


    },
    content: {
        marginTop: 24,
        padding: 40,

    },
    lable: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2E2E5D',
        marginLeft: 8,

    },
    inputEmail: {
        marginTop: 16,
        width: '100%',
        height: 56,
        backgroundColor: '#F5F5FA',
        borderRadius: 8,
    },
    input: {
        marginLeft: 24,
    },
    textPolicy: {
        marginTop: 16,
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '400',
        color: '#2E2E5D',


    },
    buttonContainer: {
        marginTop: 24,
        height: 56,
        width: '100%',
        backgroundColor: '#4838D1',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
     

    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },
    buttonContainer2: {
        marginTop: 24,
        height: 56,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
       borderWidth:2,
       borderColor:'#4838D1'

    },
    buttonLabel2: {
        fontSize: 16,
        fontWeight: '500',
        color: '#4838D1',
    }

})
export default styles;