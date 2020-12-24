import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './CalendarDetailHeader.style';
import RepageBox from '../RepageBox';
import {ICONCLOSE} from '../../../assets/index';

const CalendarDetailHeader = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <RepageBox/>
      <TouchableOpacity style={styles.btn_close}>
        <Image source={ICONCLOSE}/>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarDetailHeader;
