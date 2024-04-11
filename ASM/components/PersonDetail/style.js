import { StyleSheet } from "react-native";
import color from './../../constants/color'
const styles = StyleSheet.create({
    container: {
        padding:15,
        backgroundColor: 'white'
    },
    toolbar: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 46,
        backgroundColor: 'white'
    },
    textSetting: {
        flex: 10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginRight:25
    },
    back: {
        marginLeft:15,
        flex: 1
    },
    content:{
        width:'100%',
        marginTop:40,
        height:'80%',
       

    },
    hinhanh:{
        alignItems:'center',
        justifyContent:'center'
    },
    anhdaidien:{
        borderRadius:15,
        height:150,
        width:150,

    },
    name: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        paddingHorizontal: 20,

    },
    retypepassword: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        paddingHorizontal: 20,

    },
    email: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        paddingHorizontal: 20,

    },
    password: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        paddingHorizontal: 20,

    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#5d4037',
        width: '100%',
        marginTop: 40,
        borderRadius: 10,
        borderColor: 'd0d0d0',

    },
    buttonLabel: {
        color: 'white',
        fontSize: 27,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
export default styles;