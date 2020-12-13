import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './CalendarScreen.style';
import CalendarHeader from '../../components/Calendars/CalendarHeader';
import CalendarMain from '../../components/Calendars/CalendarMain';
import FooterBox from '../../components/Homes/FooterBox';
import {ICONHOME, ICONCALENDARACTIVE} from '../../assets';

const CalendarScreen = ({navigation}: any) => {
  const handleHomeOnPress = () => navigation.navigate('Home');
  const handleUserOnPress = () => navigation.navigate('Login');

  return (
    <ScrollView>
      <CalendarHeader/>
      <CalendarMain/>
      <FooterBox handleHomeOnPress={handleHomeOnPress} handleUserOnPress={handleUserOnPress} iconHome={ICONHOME} calendarPrimary={styles.textPrimay} iconCalendar={ICONCALENDARACTIVE}/>
    </ScrollView>
  );
};

export default CalendarScreen;
