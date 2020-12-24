import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './MainMessage.style';
import {DINHTRONG} from '../../../assets/index';

interface Props {
  name: string;
}

const MainMessage = (props: Props) => {
  const {name} = props;

  return (
    <View>
      <View>
        <Text style={styles.text_title}>Thông tin bệnh nhân</Text>
      </View>
      <View style={styles.row}>
        <Image style={styles.icon} source={DINHTRONG}/>
        <View>
          <Text style={styles.text_name}>{name}</Text>
          <Text style={styles.text_info}>17 tuổi - Nam - Bệnh nhân nội trú</Text>
        </View>
      </View>
      <View style={styles.message}>
        <Text style={styles.text_message}>Đau họng, sốt, kho khan khả năng là em bị Cô rô na rồi bác sĩ ơi T_T</Text>
        <View style={styles.arrowUp}></View>
      </View>
    </View>
  );
};

export default MainMessage;
