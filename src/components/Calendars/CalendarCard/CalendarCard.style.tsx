import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContent: {
    flex: 5,
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 7
  },
  col_left: {
    flex: 8,
  },
  text_status: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 5
  },
  text_name: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '700'
  },
  text: {
    color: '#666'
  },
  text_age: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400'
  },
  col_right: {
    flex: 3,
    alignItems: 'flex-end'
  },
  row_r: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 4.82
  },
  avatar: {
    marginTop: 3.03,
    borderRadius: 25,
    width: 49.28,
    height: 49.23
  },

});