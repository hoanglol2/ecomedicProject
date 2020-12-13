import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './CalendarDate.style';

interface Props {
  day: string;
  month: string;
}

const CalendarDate = (props: Props) => {
  const {day, month} = props;

  return (
    <View style={styles.dateContent}>
      <Text style={styles.text_bold}>{day}</Text>
      <Text style={styles.text}>{'Tháng ' + month}</Text>
    </View>
  )

};

export default CalendarDate;
