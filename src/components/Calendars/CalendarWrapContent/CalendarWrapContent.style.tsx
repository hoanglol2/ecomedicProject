import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  row_r: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateContent: {
    flex: 1,
    maxWidth: 70
  },
  cardContent: {
    flex: 5,
  },
  text_bold: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 16,
    fontWeight: '700',
    paddingTop: 10
  },
  text: {
    textAlign: 'center'
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
  text_age: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400'
  },
  card: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 7
  },
  card_active: {
    borderColor: '#F2994A',
    backgroundColor: '#FFFBF8'
  },
  text_active: {
    color: '#F2994A',
  },
  col_left: {
    flex: 8,
  },
  col_right: {
    flex: 3,
    alignItems: 'flex-end'
  },
  icon: {
    marginLeft: 4.82
  },
  avatar: {
    marginTop: 3.03,
    borderRadius: 25
  }
});