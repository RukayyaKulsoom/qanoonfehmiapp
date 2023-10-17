import * as React from 'react';
import { ConversionScreen } from './conversion';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { SignUp } from './signup';
import { Login } from './SignIn';
import { Volumes } from './volumes';
import { Splash } from './Splash';
import { Welcome } from './welcome';
import { Mictest } from './mictest';
import { Viewvolumes } from './viewvolumes';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './constants/DCSLocalize' ;
import { Home } from './home';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';
import { Feedback } from './feedback';
import { BottomNavigator } from './bottomnav';
import { Aboutus } from './aboutus';
import { Faqs } from './faqs';
import { Viewlaws } from './viewlaws';
import { Light } from './light';
import { Start} from './start'

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  fontFamily: 'Inter',
  colors: {
   ...DefaultTheme.colors,
   primary: 'black',
   backgroundColor:'black'
  },
};
export default function App() {

  return (
    <NavigationContainer theme={MyTheme} styles={styles.container}>
    
      <Stack.Navigator screenOptions={{
        headerShown: false,
       statusBarColor: '#1B4235',
        headerShadowVisible: false,
        title: null,
       
          headerBackVisible: true,
    
      }}>
       
        <Stack.Screen
          options={{
            headerShown: false
            
          }}
          name="splash" component={Splash} />

<Stack.Screen
          options={{
            headerShown: false
            
          }}
          name="start" component={Start} />
      

      
        <Stack.Screen name="home" component={BottomNavigator} options={{ headerShown: false }}/>
          
      <Stack.Screen
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: {
           
              headerBackVisible: true,
              backgroundColor:'#1B4235'
            },
            
          })}
          
          // name="home" component={Home} />

          //   <Stack.Screen
          // options={({ navigation }) => ({
          //   headerShown: false
          
          // })}
          
          name="volumes" component={Volumes} />
     
     <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              
                backgroundColor:'white'
              },
            
          }}
          name="feedback" component={Feedback} />

               <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
              
            }
          }}
          name="aboutus" component={Aboutus} />

<Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
              
            }
          }}
          name="viewlaws" component={Viewlaws} />

<Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="faqs" component={Faqs} />

<Stack.Screen
          options={({ navigation,route }) => ({
            headerShown: false
            
          })}
          name="viewvolumes" component={Viewvolumes} />
{/* 
        <Stack.Screen
          options={{
            title: '',
            headerShown: false
            , headerLeft: () => <></>,
          }}
          name="welcome" component={Welcome} /> */}
        <Stack.Screen
          options={{
            title: '',
            
            headerStyle: {
              backgroundColor: 'rgb(40,62,96)',
              headerBackVisible: false,
            }
          }}
          name="signup" component={SignUp} />
      

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(40,62,96)',
            
            }
          }}
          name="login" component={Login} />



            <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(40,62,96)',
            
            }
          }}
          name="mictest" component={Mictest} />

          
<Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(40,62,96)',
            
            }
          }}
          name="light" component={Light} />
          
        
        <Stack.Screen
          options={({ navigation }) => ({

            title: '',
            headerStyle: {
           
              headerBackVisible: false,
            },
            
          })}
          name='conversion' component={ConversionScreen} />
          
      </Stack.Navigator>

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B4235',
   
  }
})



