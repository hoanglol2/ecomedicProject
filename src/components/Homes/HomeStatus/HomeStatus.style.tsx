import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13.25,
    marginHorizontal: 10,
    backgroundColor: '#D6EAF5',
    borderRadius: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  status: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: '#fff',
    backgroundColor: '#F2994A',
    paddingLeft: 4,
    marginTop: 10.52,
    marginBottom: 8,
    width: 64.31,
  },
  text_name: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400'
  },
  text_time: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    marginRight: 10
  },
  text_date: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#666',
    marginRight: 10
  },
  flexRight: {
    alignItems: 'flex-end',
    marginTop: 10
  },
  icon: {
    marginTop: 9.03,
    marginBottom: 10.55,
    borderRadius: 25
  }
});