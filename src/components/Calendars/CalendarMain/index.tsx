import React from 'react';
import {Text, View} from 'react-native';
import styles from './CalendarMain.style';
import {DataEcomedic} from '../../../mocks';
import CalendarWrapContent from '../CalendarWrapContent';
import moment from 'moment';



const CalendarMain = () => {

  const Separate = () => (
    <Text style={styles.separate}></Text>
  )

  const ThisWeek = () => (
    <Text style={styles.text}>Tuần này</Text>
  )

  const NextWeek = () => (
    <Text style={styles.text}>Tuần sau</Text>
  )

  return (
    <View style={styles.container}>
      <ThisWeek/>
      {DataEcomedic.map((item: any, index: Number) => {
        let separate = (item.date).split('-');
        let day = separate[2];
        let month = separate[1];

        let fulltime = moment(item.date).format('LT');
        let separate_time = fulltime.split('AM') || fulltime.split('PM');
        let time = separate_time[0];

        console.log(time);


        return (
          <CalendarWrapContent time={'12:00'} key={'key-' + index} month={month} day={day} info={item.data}/>
        )
      })}
    </View>
  );
};

export default CalendarMain;
