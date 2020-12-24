import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text_title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: '#000'
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  text_time: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    color: '#27AE60'
  },
  separate: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    marginVertical: 9
  }
});