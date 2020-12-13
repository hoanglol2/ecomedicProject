import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './HomeHeader.style';
import {ICONGIRD, ICONAVATAR} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeHeader = () => {

  const HeaderLeft = () => (
    <View>
      <Text style={styles.text}>Xin chào buổi sáng</Text>
      <Text style={styles.title}>Bác sĩ Hà Ngọc Cường</Text>
    </View>
  )

  const HeaderRight = () => (
    <View style={styles.row}>
      <TouchableOpacity>
        <Image source={ICONGIRD}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon_avatar} source={ICONAVATAR}/>
      </TouchableOpacity>
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
