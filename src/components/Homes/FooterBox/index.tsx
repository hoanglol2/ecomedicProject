import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './FooterBox.style';
import {ICONPHIEU, ICONBELL, ICONUSER} from '../../../assets';

interface childProps {
  source?: any;
  title: string;
  textPrimary?: object;
  handleOnPress?: any;
}

interface parentProps {
  iconHome?: any;
  iconCalendar?: any;
  homePrimary?: object;
  calendarPrimary?: object;
  handleCalendarOnPress?: any;
  handleHomeOnPress?: any;
  handleUserOnPress?: any;
}

const FooterBox = (props: parentProps) => {
  const {
    iconHome,
    iconCalendar,
    homePrimary,
    calendarPrimary,
    handleCalendarOnPress,
    handleHomeOnPress,
    handleUserOnPress
  } = props;

  const WrapIcon = (props: childProps) => {
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
      <WrapIcon handleOnPress={handleHomeOnPress} textPrimary={homePrimary} title='Trang chủ' source={iconHome}/>
      <WrapIcon handleOnPress={handleCalendarOnPress} textPrimary={calendarPrimary} title='Lịch làm việc' source={iconCalendar}/>
      <WrapIcon title='Phiếu khám' source={ICONPHIEU}/>
      <WrapIcon title='Thông báo' source={ICONBELL}/>
      <WrapIcon handleOnPress={handleUserOnPress} title='Cá nhân' source={ICONUSER}/>
    </View>
  );
};

export default FooterBox;
