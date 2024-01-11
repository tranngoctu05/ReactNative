import { StyleSheet } from "react-native";
import color from './../../containt/color'
const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#59d0ea',
        paddingHorizontal: 20,

    },
    iconSwapper: {
        width: 44,
        height: 44,
        backgroundColor: '#59d0ea',
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        fontSize: 20,
        color: color.white
    }

})
export default styles;