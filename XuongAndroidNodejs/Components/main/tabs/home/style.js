import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  findtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    lineHeight: 20,
    marginLeft: 10,
  },
  contaifind: {
    width: '100%',
    height: 18,
    marginTop: 16.93,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  imagelogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 26.93,
  },
  paginationBoxStyle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Sliderboxcontainer: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerproduct: {
    width: '100%',
    height:'auto',
    padding:20,
  },
  productseen: {
    width: '100%',
    height: 40,
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  nameproduct: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    lineHeight: 20,
  },
  allproduct: {
    fontSize: 16,
    color: '#00CC00',
    fontWeight: 'bold',
    fontFamily: 'Gilroy-Bold',
    lineHeight: 20,
  }
});
export default styles;
