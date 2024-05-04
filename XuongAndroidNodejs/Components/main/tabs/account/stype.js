import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    height: 164.15,
    flexDirection: 'row',
  },

  avatar: {
    width: 63.44,
    height: 64.32,
    marginLeft: 25,
    marginTop: 69.82,
  },
  info: {
    position: 'absolute',
    marginTop: 80.49,
    marginLeft: 108.6,
  },
  ten: {
    flexDirection: 'row',
  },
  name: {
    color: '#181725',
    fontFamily: 'GilroyBold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18,
  },
  edit: {
    width: 14.995,
    height: 15,
    marginLeft: 10,
  },
  gmail: {
    color: '#7C7C7C',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 5,
  },
  item: {
    borderTopWidth: 1,
    height: 63,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  iconContainer: {
    flex: 1,
  },
  icon: {
    color: 'black',

    marginLeft: 26,
  },
  nametask: {
    color: 'black',
    fontSize: 18,
    flex: 5,
    fontWeight: '600',
  },
  arrowRight: {
    marginRight: 30,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogout: {
    flexDirection: 'row',
    width: 364,
    height: 67,
    marginTop: 20,
    borderRadius: 19,
    backgroundColor: '#F2F3F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogout: {
    color: '#53B175',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  imgLogout: {
    position: 'absolute',
    left: 30,
  },
});
export default styles;
