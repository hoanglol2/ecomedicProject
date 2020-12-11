import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './HomeMore.style';
import {ICONARROWBT} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeMore = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Mở rộng</Text>
      <Image source={ICONARROWBT}/>
    </TouchableOpacity>
  );
};

export default HomeMore;
