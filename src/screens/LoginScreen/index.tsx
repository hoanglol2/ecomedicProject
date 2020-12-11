import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './LoginScreen.style';
import BackgroundBox from '../../components/Logins/BackgroundBox';
import TextBox from '../../components/Logins/TextBox';



const LoginScreen = ({navigation}: any) => {

  return (
    <View style={styles.container}>
      <BackgroundBox/>
      <TextBox handleOnPress={() => navigation.navigate('Home')}/>
    </View>
  );
};

export default LoginScreen;
