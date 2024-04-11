import { StyleSheet, Dimensions } from "react-native";
import color from './../../constants/color'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentTop: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        height: 56,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    notification: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 16,
        height: 45,
        width: 324,
        borderColor: '#D7CCC8'
    },
    inputSearch: {
        flex: 1,
        fontSize: 12,
        marginLeft: 5,



    },
    iconContainer: {
        position: 'absolute',
        right: 10, // Khoảng cách từ biên phải của ô input
    },
    iconSearch: {
        // Các style cho icon search
    },
    iconNotifi: {
        marginRight: 10,
        height: 28,
        width: 28,

    },
    slider: {
        height: 200,
        marginTop: 10,
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center',

    },
    dotActive:{
        margin:3,
        color:'#5D4037'
  
    },
    dot:{
        margin:3,
        color:'white'
    }


})
export default styles; 