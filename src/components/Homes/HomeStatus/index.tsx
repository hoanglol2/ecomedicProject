import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './HomeStatus.style';
import {ICONOCLOCK, ICONGIRL} from '../../../assets';


const HomeStatus = () => {

  const StatusLeft = () => (
    <View>
      <Text style={styles.status}>Hẹn khám</Text>
      <Text style={styles.text_name}>Nguyễn Minh Hằng</Text>
      <Text style={styles.text}>31 tuổi - Nữ</Text>
    </View>
  )

  const StatusRight = () => (
    <View style={styles.flexRight}>
      <View style={styles.row}>
        <Text style={styles.text_time}>15: 00</Text>
        <Text style={styles.text_date}>Thứ 4, 10/04/2020</Text>
        <Image source={ICONOCLOCK}/>
      </View>
      <Image style={styles.icon} source={ICONGIRL}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <StatusLeft/>
      <StatusRight/>
    </View>
  );
};

export default HomeStatus;
