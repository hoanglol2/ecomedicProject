import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import styles from './HeaderMessage.style';
import {ICONWRITEPLUGIN} from '../../../assets/index';
import {ICONOCLOCKGREEN} from '../../../assets/index';


const HeaderMessage = ({navigation}: any) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text_title}>Hẹn khám: Gói khám tổng quát</Text>
        <TouchableOpacity>
          <Image source={ICONWRITEPLUGIN}/>
        </TouchableOpacity>
      </View>
      <View style={styles.time}>
        <Image source={ICONOCLOCKGREEN}/>
        <Text style={styles.text_time}>14:00 Thứ 6, 10 thg 4</Text>
      </View>
      <View style={styles.separate}></View>
    </View>
  );
};

export default HeaderMessage;
