import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './CalendarHeaderTop.style';
import CalendarButton from '../CalendarButton';




const CalendarHeaderTop = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>Lịch làm việc</Text>
      <CalendarButton/>
    </View>
  );
};

export default CalendarHeaderTop;
