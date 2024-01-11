import { StyleSheet } from "react-native";
import color from "../../containt/color";
const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'space-between',

    },

    square: {   
        width: 48,
        height: 36,
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',

    },
    even :{
        backgroundColor: '#47cdf1',
    },
    odd:{
        backgroundColor: color.green,
    },
    number: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',

    },
    content: {
        width: '80%',
        fontSize: 16,
        color: 'black',

    }
})
export default styles;