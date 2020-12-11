import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './HomeHeader.style';
import {ICONGIRD, ICONAVATAR} from '../../../assets';



const HomeHeader = () => {

  const HeaderLeft = () => (
    <View>
      <Text style={styles.text}>Xin chào buổi sáng</Text>
      <Text style={styles.title}>Bác sĩ Hà Ngọc Cường</Text>
    </View>
  )

  const HeaderRight = () => (
    <View style={styles.row}>
      <Image source={ICONGIRD}/>
      <Image style={styles.icon_avatar} source={ICONAVATAR}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <HeaderLeft/>
      <HeaderRight/>
    </View>
  );
};

export default HomeHeader;
