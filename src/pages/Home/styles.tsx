import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 45,
  },
  logoHeader: {
    fontFamily: 'Montserrat-BlackItalic',
    color: '#8F5DE8',
    fontSize: 100,
    marginTop: 60,
  },
  headerDescription: {
    color: '#BCBCBC',
    fontSize: 12,
    marginTop: 60,
    textAlign: 'center',
  },
  stravaButtonContainer: {
    marginTop: 50,
    backgroundColor: '#FF5900',
    paddingVertical: 11,
    paddingHorizontal: 29,
    borderRadius: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  stravaButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  otherLoginButtonContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  otherLoginButtonText: {
    color: '#BCBCBC',
    fontSize: 10,
  },
});
