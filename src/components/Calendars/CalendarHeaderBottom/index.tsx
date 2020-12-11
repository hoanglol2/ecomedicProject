import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './CalendarHeaderBottom.style';
import CalendarSidebar from '../CalendarSidebar';
import CalendarToggle from '../CalendarToggle';



const CalendarHeaderBottom = () => {
  return (
    <View style={styles.container}>
      <CalendarSidebar/>
      <CalendarToggle/>
    </View>
  );
};

export default CalendarHeaderBottom;
