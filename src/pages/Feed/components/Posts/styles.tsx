import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  scrollView: {},
  icon: {
    marginRight: 13,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 25,
  },
  headerIconsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoHeader: {
    fontFamily: 'Montserrat-BlackItalic',
    color: '#8F5DE8',
    fontSize: 24,
  },
  createNewPostContainer: {
    paddingHorizontal: 45,
    paddingVertical: 10,
    backgroundColor: '#8F5DE8',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  createNewPostText: {
    color: '#FFF',
  },
  createNewPostIcon: {
    marginLeft: 5,
  },
  postContainer: {
    borderTopColor: 'rgba(143, 93, 232, 0.4)',
    borderTopWidth: 3,
  },
  postContainerHeader: {
    paddingHorizontal: 35,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postUserName: {
    color: '#8F5DE8',
    fontWeight: '500',
  },
  postDate: {
    color: '#8F5DE8',
    fontWeight: '300',
  },
  postUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInforContainer: {
    flexDirection: 'row',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  postActionsIcons: {
    color: '#8F5DE8',
  },
  badgeContainer: {
    position: 'absolute',
    right: -2,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
