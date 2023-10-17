import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Welcome}  from './welcome';
import {Home} from './home';
import {Start} from './start';
import Icon from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { Feedback } from './feedback';
import {Image, StyleSheet, Dimensions } from 'react-native';
import { Categories } from './categories';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const dimensions= {
    
  screenHeight : Dimensions.get('window').height,
  screenWidth : Dimensions.get('window').width
}

const Tab = createBottomTabNavigator();
const BottomNavigator= () => {
 
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'#B88364',
      tabBarStyle: {
        height:dimensions.screenHeight*0.1, display:'flex'},
      headerShown:false,
  "tabBarItemStyle": {
    "borderRightWidth": 1,
    "borderRightColor": "#B88364",
    "backgroundColor": "#1B4235"
  },
      labelStyle:{fontSize:15,paddingBottom:5},
    }}
    >
      
       <Tab.Screen name="start" component={Start} options={{
        tabBarIcon: ({focused,size}) => (<Icon name="home" size={size} color={focused ? '#rgba(251, 195, 162, 1)' : '#B88364'}/>),
        tabBarShowLabel: false
      }}/>
   
      <Tab.Screen name="feedback" component={Feedback} options={{
        tabBarIcon: ({focused,size}) => (<Icon1 name="feedback" size={size} color={focused ? '#rgba(251, 195, 162, 1)' : '#B88364'}/>),
        tabBarShowLabel: false
      }}/>

    </Tab.Navigator>
     
  );
}

export {BottomNavigator};