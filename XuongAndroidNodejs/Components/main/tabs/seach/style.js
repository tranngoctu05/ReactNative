import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
    },
    findtext: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      fontFamily: 'Gilroy-Bold',
      lineHeight: 20,
    },
    contaifind: {
      width: 126,
      height: 18,
      marginTop: 56.93,
    },
    containersearch: {
      width: '100%',
      padding: 20,
      marginTop: 26,
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 51,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
    },
    searchIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    search: {
      flex: 1,
    },
  
    container1: {
      width: '44%',
      height: 189.106,
      flexShrink: 0,
      borderRadius: 18,
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.12)', 
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1, 
      shadowRadius: 12,
      elevation: 6,
      alignItems: 'center',
      margin: 10,
    },
    
    avatar: {
      width: 111.379,
      height: 74.902,
      flexShrink: 0,
      resizeMode: 'cover',
      marginTop: 27.68,
    },
    name: {
      color: '#181725',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 22,
      letterSpacing: 0.1,
      marginVertical: 15,
      marginTop: 20,
    },
    flatListContainer: {
      justifyContent: 'space-between',
    },
    scrollview: {
      width: '100%',
    },
  });

export default styles;