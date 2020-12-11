import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './HomeOption.style';
import {ICONFACE, DOCTOR, ICONTOOLDOCTOR} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  styleSheet?: any;
  icon?: any;
  value?: any;
  iconbg?: any;
}

const HomeScreen = () => {

  const OptionBox = (props: Props) => {
    const {styleSheet, icon, value, iconbg} = props;

    return (
      <TouchableOpacity style={[styles.wrapper, styleSheet]}>
        <Image source={icon}/>
        <Text style={styles.text_1}>{value}</Text>
      </TouchableOpacity>
    )
  }

  const OptionBackground = (props: Props) => {
    const {styleSheet, icon, value, iconbg} = props;

    return (
      <TouchableOpacity style={[styles.wrapper, styles.wrapperBackground]}>
        <Image style={styles.background} source={iconbg} />
        <View style={styles.wrapperIcon}>
          <Image source={icon}/>
          <Text style={styles.text}>{value}</Text>
        </View>
      </TouchableOpacity>
    )
  }



  return (
    <View style={styles.container}>
      <OptionBox styleSheet={styles.thisFace} icon={ICONFACE} value="Bệnh nhân"/>
      <OptionBackground icon={ICONTOOLDOCTOR} iconbg={DOCTOR} value="Bác sĩ"/>
      <OptionBox styleSheet={styles.thisPicture} icon={ICONFACE} value="Chuẩn đoán hình ảnh"/>
      <OptionBox styleSheet={styles.thisFile} icon={ICONFACE} value="Tài liệu"/>
    </View>
  );
};

export default HomeScreen;
