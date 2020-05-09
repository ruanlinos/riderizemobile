import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8F5DE8',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
  },
  centerButtonText: {
    fontFamily: 'Montserrat-BlackItalic',
    color: '#FFFFFF',
    fontSize: 26,
  },
  badgeContainer: {
    position: 'absolute',
    right: -1,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
