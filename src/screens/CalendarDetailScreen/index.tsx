import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './CalendarDetailScreen.style';
import CalendarDetailHeader from '../../components/CalendarsDetails/CalendarDetailHeader';
import CalendarDetailContent from '../../components/CalendarsDetails/CalendarDetailContent';
import getProfileFromServer from '../../mocks/index';


const CalendarDetailScreen = ({navigation, route}: any) => {

  const {id} = route.params;
  const dataEcomedic = getProfileFromServer();



  console.log(dataEcomedic);

  return (
    <View style={styles.container}>
      <CalendarDetailHeader/>
      <CalendarDetailContent name="dsad"/>
    </View>
  );
};

export default CalendarDetailScreen;
