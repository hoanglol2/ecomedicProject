import React from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import styles from './Inputfield.style';
import {ICONVNBG, ICONVNSTAR} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  styleSheet?: any;
}

interface PropsX {
  handleOnPress: any;
}

const Inputfield = (props: PropsX) => {

  const {handleOnPress} = props;

  const PickerBox = (props: Props) => {
    const {styleSheet} = props;

    return (
      <View style={styleSheet}>
        <View>
          <Image style={styles.icon_bg} source={ICONVNBG}/>
          <Image style={styles.icon} source={ICONVNSTAR}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.text_1}>84</Text>
          <Text style={styles.separate}></Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nhập số điện thoại</Text>
      <TextInput style={styles.input} placeholder='0987654321'/>
      <PickerBox styleSheet={styles.picker}/>
      <TouchableOpacity onPress={handleOnPress} style={styles.button}>
        <Text style={styles.text_button}>Gửi mã đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inputfield;
