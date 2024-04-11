import { StyleSheet } from "react-native";
const stylesP = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        padding:15
    },
    toolbar: {
        marginTop:59,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textSetting: {
        flex: 10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    },
    back: {
        marginLeft:15,
        position:'absolute',
        left:10,
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
        marginTop: 50,
        height: 48,
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#252A32',
        paddingHorizontal: 20,
        color:'#fff'

    },
    retypepassword: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#252A32',
        paddingHorizontal: 20,
        color:'#828282'


    },
    email: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#252A32',
        paddingHorizontal: 20,
        color:'#fff'


    },
    password: {
        marginTop: 25,
        height: 48,
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#252A32',
        paddingHorizontal: 20,
        color:'#828282'

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
export default stylesP;