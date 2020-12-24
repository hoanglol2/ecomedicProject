import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './RepageBox.style';
import {ICONARROWLEFT} from '../../../assets/index';

const RepageBox = ({navigation}: any) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Image source={ICONARROWLEFT}/>
      <Text style={styles.text}>Trở về</Text>
    </TouchableOpacity>
  );
};

export default RepageBox;
