import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './BackgroundBox.style';
import {BGLOGIN, BGGRADIENT} from '../../../assets';



const BackgroundBox = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image_bg} source={BGLOGIN}/>
      <Image style={styles.image_bg_gradient} source={BGGRADIENT}/>
    </View>
  );
};

export default BackgroundBox;
