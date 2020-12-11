import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './CalendarWrapContent.style';
import {userInterface} from '../../../mocks/interface';


interface Props {
  info?: any;
  day?: any;
  month?: any;
  time: any;
}

interface PropsCard {
  styleSheet?: any;
  styleSheetText?: any;
  data: userInterface;
  time?: any;
}


const CalendarWrapContent = (props: Props) => {
  const {info, day, month, time} = props;

  const CalendarDate = () => {
    return (
      <View style={styles.dateContent}>
        <Text style={styles.text_bold}>{day}</Text>
        <Text style={styles.text}>{'Tháng ' + month}</Text>
      </View>
    )
  }

  const CalendarCard = (props: PropsCard) => {
    const {data, styleSheet, styleSheetText, time} = props;

    return (
      <TouchableOpacity style={styles.cardContent}>
        <View style={[styles.card, styleSheet]}>
          <View style={styles.col_left}>
            <Text style={styles.text_status}>{data.status}</Text>
            <Text style={styles.text_name}>{data.name}</Text>
            <Text style={styles.text_age}>{data.age + ' Tuổi - ' + data.gender}</Text>
          </View>
          <View style={styles.col_right}>
            <View style={styles.row_r}>
              <Text style={styleSheetText}>{time}</Text>
              <Image style={styles.icon} source={data.icon}/>
            </View>
            <Image style={styles.avatar} source={data.avatar}/>
          </View>
        </View>
    </TouchableOpacity>
    )
  }

  const renderItem = ({item}: any) => {

    if (item.time == 'Bây giờ') {
      return (
        <CalendarCard styleSheetText={styles.text_active} styleSheet={styles.card_active} data={item}/>
      )
    } else {
      return (
        <CalendarCard data={item}/>
      )
    }

  }

  return (
    <View style={styles.row}>
      <CalendarDate/>
      <FlatList
        data={info}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={null}
      />
    </View>
  );
};

export default CalendarWrapContent;
