import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './CalendarCard.style';
import {userInterface} from '../../../mocks/interface';


interface Props {
  data: userInterface;
  styleSheet?: any;
  styleSheetText?: any;
  time: any;
  icon: any;
  handleOnpress: any;
}

const CalendarCard = (props: Props) => {
  const {data, styleSheet, styleSheetText, time, icon, handleOnpress} = props;

  return (
    <TouchableOpacity onPress={handleOnpress} style={styles.cardContent}>
        <View style={[styles.card, styleSheet]}>
          <View style={styles.col_left}>
            <Text style={styles.text_status}>{data.status}</Text>
            <Text style={styles.text_name}>{data.name}</Text>
            <Text style={styles.text_age}>{data.age + ' Tuổi - ' + data.gender}</Text>
          </View>
          <View style={styles.col_right}>
            <View style={styles.row_r}>
              <Text style={[styles.text, styleSheetText]}>{time}</Text>
              <Image style={styles.icon} source={icon}/>
            </View>
            <Image style={styles.avatar} source={{uri: 'https://' + data.avatar}}/>
          </View>
        </View>
    </TouchableOpacity>
  )

};

export default CalendarCard;
