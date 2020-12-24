import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './CalendarDetailContent.style';
import HeaderMessage from '../HeaderMessage';
import MainMessage from '../MainMessage';
import BottomMessage from '../BottomMessage';

interface Props {
  name: string;
}

const CalendarDetailContent = (props: Props) => {
  const {name} = props;

  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <HeaderMessage/>
        <MainMessage name={name}/>
        <BottomMessage/>
      </View>
    </View>
  );
};

export default CalendarDetailContent;
