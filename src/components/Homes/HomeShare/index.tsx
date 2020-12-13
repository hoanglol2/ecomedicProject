import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './HomeShare.style';
import {ICONARROWRIGHT, ICONSHARE, CHONGMAT, DAUBUNG, HASOT} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface cardProps {
  source: any;
  title: string;
}

const HomeShare = () => {

  const HomeShareTitle = () => {

    return (
      <View style={[styles.spaceBeetWeen, styles.row]}>
        <View style={styles.row}>
          <Image source={ICONSHARE} />
          <Text style={styles.text_title}>Chia sẻ y học</Text>
        </View>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text_arrow}>Xem thêm</Text>
          <Image source={ICONARROWRIGHT}/>
        </TouchableOpacity>
      </View>
    )
  }

  const CardShare = (props: cardProps) => {
    const {source, title} = props;

    return (
      <View style={styles.wrap_post}>
        <Image style={styles.image} source={source}/>
        <TouchableOpacity><Text style={styles.text}>{title}</Text></TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <HomeShareTitle/>
      <View style={styles.row}>
        <CardShare source={CHONGMAT} title='Chóng mặt và hội chứng tiền đình'/>
        <CardShare source={DAUBUNG} title='Dấu hiệu cảnh báo ung thư đại tràng'/>
        <CardShare source={HASOT} title='Sốt và một số điều cần biết'/>
      </View>
    </View>
  );
};

export default HomeShare;
