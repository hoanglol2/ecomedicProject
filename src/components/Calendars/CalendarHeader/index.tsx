import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './CalendarHeader.style';
import CalendarHeaderTop from '../CalendarHeaderTop';
import CalendarHeaderBottom from '../CalendarHeaderBottom';



const CalendarHeader = () => {
  return (
    <View style={styles.container}>
      <CalendarHeaderTop/>
      <CalendarHeaderBottom/>
    </View>
  );
};

export default CalendarHeader;
