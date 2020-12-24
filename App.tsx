import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import BillScreen from './src/screens/BillScreen';
import MessageScreen from './src/screens/MessageScreen';
import CalendarDetailScreen from './src/screens/CalendarDetailScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'home') {
              return <IconAwesome name="home" color="#2D9CDB" size={30} />;
            } else if (route.name == 'calendar') {
              return <IconAwesome name="calendar" color="#2D9CDB" size={30} />;
            } else if (route.name == 'bill') {
              return <IconAwesome name="calendar" color="#2D9CDB" size={30} />;
            } else  if (route.name == 'message') {
              return <IconAwesome name="calendar" color="#2D9CDB" size={30} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2D9CDB',
          inactiveTintColor: '#666666',
        }}>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="calendar" component={CalendarScreen} />
        <Tab.Screen name="bill" component={BillScreen} />
        <Tab.Screen name="message" component={MessageScreen} />
      </Tab.Navigator> */}

      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} /> */}
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Trang calendar' }} />
        <Stack.Screen name="DetailCalendar" component={CalendarDetailScreen} options={{ title: 'Trang chi tiết calendar' }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;