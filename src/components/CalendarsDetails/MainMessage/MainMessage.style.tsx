import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text_title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#CCC',
    textTransform: 'uppercase',
    marginBottom: 12
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17
  },
  icon: {
    width: 47.6,
    height: 47.6,
    borderRadius: 50,
    marginRight: 21
  },
  text_name: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: '#000',
    textTransform: 'uppercase'
  },
  text_info: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '400',
    color: '#000'
  },
  message: {
    backgroundColor: '#E7F5FD',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 3,
    marginBottom: 40,
    position: 'relative'
  },
  text_message: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    color: '#000'
  },
  arrowUp: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderBottomColor: '#E7F5FD',
    top: -12,
    left: 12
  }
});