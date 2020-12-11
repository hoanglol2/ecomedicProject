import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './CalendarButton.style';
import {ICONPLUS} from '../../../assets';




const CalendarButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={ICONPLUS}/>
      <Text style={styles.text}>Tạo mới</Text>
    </TouchableOpacity>
  );
};

export default CalendarButton;
