import { StyleSheet } from "react-native";
import color from './../../constants/color'
const styles = StyleSheet.create({
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
    content:{
        marginTop:40,

    },
    item:{
        marginTop:10,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:50,

    },
    tagName:{
        marginLeft:20,
        fontSize:20,
        textAlign:'left',
        flex:7,
        fontWeight:'bold',


    },
    logoitem:{
        marginLeft:20,
        height:28,
        width:28,

    },
    arrow:{
        marginRight:20,
        height:25,
        width:25,
    }
})
export default styles;