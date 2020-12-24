import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './HomeScreen.style';
import HomeHeader from '../../components/Homes/HomeHeader';
import HomeStatus from '../../components/Homes/HomeStatus';
import HomeOption from '../../components/Homes/HomeOption';
import HomeMore from '../../components/Homes/HomeMore';
import HomeSeparate from '../../components/Homes/HomeSeparate';
import HomeShare from '../../components/Homes/HomeShare';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeHeader/>
      <HomeStatus/>
      <HomeOption/>
      <HomeMore/>
      <HomeSeparate/>
      <HomeShare/>
    </ScrollView>
  );
};

export default HomeScreen;
