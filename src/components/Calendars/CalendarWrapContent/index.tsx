import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './CalendarWrapContent.style';
import CalendarDate from '../CalendarDate';
import CalendarCard from '../CalendarCard';
import {ICONCOCLOCKCAL, ICONOCLOCK} from '../../../assets';
import moment from 'moment';

interface Props {
  data: any;
  day: string;
  month: string;
}

const CalendarWrapContent = (props: Props) => {
  const {day, month, data} = props;

  const renderItem = ({item}: any) => {
    let separate_time, fullTime, time, timeToday;

    fullTime = moment(item.timeStamp).format('LT');
    timeToday = moment(item.timeStamp).calendar();
    // get time.
    if (fullTime.includes('AM')) {
      separate_time = fullTime.split('AM');
    } else {
      separate_time = fullTime.split('PM');
    }
    time = separate_time[0];
    // getToday.
    if (timeToday.includes('Today')) {
      return (
        <CalendarCard icon={ICONCOCLOCKCAL} styleSheet={styles.card_active} styleSheetText={styles.text_active} time={'Bây giờ'} data={item}/>
      )
    } else {
      return (
        <CalendarCard icon={ICONOCLOCK} time={time} data={item}/>
      )
    }
  }

  return (
    <View style={styles.row}>
      <CalendarDate day={day} month={month}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={null}
      />
    </View>
  );
};

export default CalendarWrapContent;
