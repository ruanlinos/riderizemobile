import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  containerForm: {
    paddingHorizontal: 45,
    marginVertical: 25,
  },
  logoHeader: {
    fontFamily: 'Montserrat-BlackItalic',
    color: '#8F5DE8',
    fontSize: 100,
    marginTop: 60,
  },
  headerDescription: {
    color: '#BCBCBC',
    fontSize: 14,
    marginTop: 60,
    textAlign: 'center',
  },
  otherLoginButtonContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    maxWidth: 150,
    paddingVertical: 10,
    paddingHorizontal: 40,
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
  inputContainer: {
    flexDirection: 'row',
  },
  singupText: {
    textAlign: 'left',
    color: '#BCBCBC',
    fontSize: 12,
    marginTop: 40,
  },
  singupButton: {
    textAlign: 'left',
    color: '#BCBCBC',
    fontSize: 12,
  },
  textInput: {
    flex: 1,
    minHeight: 40,
    borderStyle: 'solid',
    borderColor: '#8F5DE8',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#BCBCBC',
    marginBottom: 30,
  },
});
