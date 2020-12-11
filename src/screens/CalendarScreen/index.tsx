import React from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './CalendarScreen.style';
import CalendarHeader from '../../components/Calendars/CalendarHeader';
import CalendarMain from '../../components/Calendars/CalendarMain';



const CalendarScreen = () => {
  return (
    <View>
      <CalendarHeader/>
      <CalendarMain/>
    </View>
  );
};

export default CalendarScreen;
