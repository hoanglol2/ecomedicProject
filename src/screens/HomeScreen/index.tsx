import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeScreen.style';
import HomeHeader from '../../components/Homes/HomeHeader';
import HomeStatus from '../../components/Homes/HomeStatus';
import HomeOption from '../../components/Homes/HomeOption';
import HomeMore from '../../components/Homes/HomeMore';
import HomeSeparate from '../../components/Homes/HomeSeparate';
import FooterBox from '../../components/Homes/FooterBox';
import HomeShare from '../../components/Homes/HomeShare';
import {ICONHOMEACTIVE, ICONCALENDAR} from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';


const HomeScreen = ({navigation}: any) => {
  const handleCalendarOnPress = () => navigation.navigate('Calendar');
  const handleUserOnPress = () => navigation.navigate('Login');

  return (
    <ScrollView style={styles.container}>
      <HomeHeader/>
      <HomeStatus/>
      <HomeOption/>
      <HomeMore/>
      <HomeSeparate/>
      <HomeShare/>
      <FooterBox iconHome={ICONHOMEACTIVE} homePrimary={styles.textPrimay} iconCalendar={ICONCALENDAR} handleCalendarOnPress={handleCalendarOnPress} handleUserOnPress={handleUserOnPress}/>
    </ScrollView>
  );
};

export default HomeScreen;
