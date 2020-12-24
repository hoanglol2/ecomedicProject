import React from 'react';
import {Text, View} from 'react-native';
import styles from './CalendarMain.style';
import CalendarWrapContent from '../CalendarWrapContent';
import { endOfWeek, isBefore } from 'date-fns'
import getProfileFromServer from '../../../mocks/index';

interface Props {
  handleOnPress: any;
}

const CalendarMain = (props: Props) => {

  const {handleOnPress} = props;

  const ecomedics = getProfileFromServer();
  const endWeek = endOfWeek(new Date(), { weekStartsOn: 1 });
  const listThisWeek = ecomedics.filter((item: any) => isBefore(new Date(item.date), endWeek));
  const listNextWeek = ecomedics.filter((item: any) => !isBefore(new Date(item.date), endWeek));
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
      {listThisWeek.map((item: any, index: Number) => {
        let separate, day, month;
        separate = (item.date).split('-');
        day = separate[2];
        month = separate[1];

        return (
          <CalendarWrapContent handleOnpress={handleOnPress} day={day}  month={month} key={'key-' + index} data={item.data}/>
        )
      })}

      <Separate/>

      <NextWeek/>
      {listNextWeek.map((item: any, index: Number) => {
        let separate, day, month;
        separate = (item.date).split('-');
        day = separate[2];
        month = separate[1];
        return (
          <CalendarWrapContent handleOnpress={handleOnPress} day={day} month={month} key={'key-' + index} data={item.data}/>
        )
      })}
    </View>
  )
};

export default CalendarMain;
