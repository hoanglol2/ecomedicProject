import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrap_button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: 167,
    borderColor: '#F2994A',
    justifyContent: 'center',
    paddingVertical: 12.33,
    borderRadius: 5
  },
  btn_primary: {
    backgroundColor: '#2D9CDB',
    borderColor: '#2D9CDB'
  },
  text: {
    color: '#fff'
  },
  text_recorder: {
    marginLeft: 8.17,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: '#F2994A',
  }
});