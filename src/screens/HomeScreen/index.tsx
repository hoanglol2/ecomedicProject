import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeScreen.style';
import HomeHeader from '../../components/Homes/HomeHeader';
import HomeStatus from '../../components/Homes/HomeStatus';
import HomeOption from '../../components/Homes/HomeOption';
import HomeMore from '../../components/Homes/HomeMore';
import HomeSeparate from '../../components/Homes/HomeSeparate';
import FooterBox from '../../components/Homes/FooterBox';


const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <HomeStatus/>
      <HomeOption/>
      <HomeMore/>
      <HomeSeparate/>
      <FooterBox handleOnPress={() => navigation.navigate('Calendar')}/>
    </View>
  );
};

export default HomeScreen;
