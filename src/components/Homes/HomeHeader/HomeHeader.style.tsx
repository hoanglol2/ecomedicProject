import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    lineHeight: 25,
    fontWeight: '400',
    color: '#666'
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600'
  },
  icon_avatar: {
    borderRadius: 25,
    marginLeft: 12.45
  }
});