import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapper: {
    width: 192,
    height: 80,
    paddingVertical: 10.89,
    paddingHorizontal: 8.25,
    borderRadius: 5,
    marginTop: 10
  },
  thisFace: {
    backgroundColor: '#E3EDB3',
  },
  thisPicture: {
    backgroundColor: '#F0D1FC'
  },
  thisFile: {
    backgroundColor: '#F1E1BE'
  },
  wrapperBackground: {
    maxWidth: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  background: {
    borderRadius: 5,
  },
  wrapperIcon: {
    position: 'absolute',
    left: 10,
    top: 12
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '700',
    color: '#2B5054'
  },
  text_1: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '700',
    color: '#5E6927'
  }
});