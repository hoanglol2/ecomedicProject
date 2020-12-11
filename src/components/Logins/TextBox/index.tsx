import React from 'react';
import {Text, View} from 'react-native';
import styles from './TextBox.style';
import Inputfield from '../Inputfield';

interface Props {
  handleOnPress: any;
}

const TextBox = (props: Props) => {

  const {handleOnPress} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bác sĩ</Text>
      <Text style={styles.text}>Đây là ứng dụng quản lý công việc dành riêng cho bác sĩ trong thời đại 4.0</Text>
      <Inputfield handleOnPress={handleOnPress}/>
    </View>
  );
};

export default TextBox;
