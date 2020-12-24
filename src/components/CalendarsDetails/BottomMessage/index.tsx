import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './BottomMessage.style';
import {ICONRECORDER} from '../../../assets/index';

const BottomMessage = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrap_button}>
        <Image source={ICONRECORDER}/>
        <Text style={styles.text_recorder}>Gọi video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.wrap_button, styles.btn_primary]}>
        <Text style={[styles.text_recorder, styles.text]}>Tạo phiếu khám</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMessage;
