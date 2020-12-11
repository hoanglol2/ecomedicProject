import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './FooterBox.style';
import {ICONHOME, ICONCALENDAR, ICONPHIEU, ICONBELL, ICONUSER} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {
  source?: any;
  title?: any;
  textPrimary?: any;
  handleOnPress: any;
}

const FooterBox = (props: Props) => {

  const {handleOnPress} = props;

  const WrapIcon = (props: Props) => {

    const {source, title, textPrimary, handleOnPress} = props;

    return (
      <TouchableOpacity style={styles.wrap_icon} onPress={handleOnPress}>
        <Image source={source}/>
        <Text style={[styles.text, textPrimary]}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <WrapIcon handleOnPress={handleOnPress} textPrimary={styles.textPrimay} title='Trang chủ' source={ICONHOME}/>
      <WrapIcon handleOnPress={handleOnPress} title='Lịch làm việc' source={ICONCALENDAR}/>
      <WrapIcon handleOnPress={handleOnPress} title='Phiếu khám' source={ICONPHIEU}/>
      <WrapIcon handleOnPress={handleOnPress} title='Thông báo' source={ICONBELL}/>
      <WrapIcon handleOnPress={handleOnPress} title='Cá nhân' source={ICONUSER}/>
    </View>
  );
};

export default FooterBox;
