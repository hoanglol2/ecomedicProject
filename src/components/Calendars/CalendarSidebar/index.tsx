import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './CalendarSidebar.style';
import {ICONBAR} from '../../../assets';



const CalendarSidebar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={ICONBAR}/>
      </TouchableOpacity>
      <Text style={styles.text}>Tháng 12</Text>
    </View>
  );
};

export default CalendarSidebar;
