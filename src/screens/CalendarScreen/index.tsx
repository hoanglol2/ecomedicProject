import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './CalendarScreen.style';
import CalendarHeader from '../../components/Calendars/CalendarHeader';
import CalendarMain from '../../components/Calendars/CalendarMain';

const CalendarScreen = ({navigation}: any) => {
  return (
    <View>
      <CalendarHeader/>
      <CalendarMain handleOnPress={(id: any) => navigation.navigate('DetailCalendar', {id: id})}/>
    </View>
  );
};

export default CalendarScreen;
