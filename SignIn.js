import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from './firebase';
import { ref } from "firebase/database";
import DatePicker from 'react-native-date-picker'

import { useTranslation } from "react-i18next";

import { set } from 'firebase/database';

function Login({ navigation, route }) {

  const {t, i18n} = useTranslation();
  
  const selectLanguageCode = i18n.language;

  const LANGUAGES = [
    {code: 'en', label: 'English'},
    {code: 'ur', label: 'اردو'}
  ]; 
  const setLanguage=(code) => {
    return i18n.changeLanguage(code);
  } 


  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [show, setShow] = useState(false);
  const showPass = () => {
    if (show === false) {
      setShow(true);
      return;
    }
    setShow(false);
  };
  const storeData = async value => {
		try {
      console.log(value);
      console.log('j');
			await AsyncStorage.setItem('userId', value);
      await AsyncStorage.setItem('useremail', email);
		} catch (e) {
			throw e;
		}
	};

  const getData =()=>{
    setError('');
    setError1('');
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    storeData(userCredential.user.uid);
    navigation.navigate('conversion');
  })
  .catch(err => {
    console.log(err.code)
    if (err.code === 'auth/invalid-email')
      setError('Invalid Email entered .');
    else if (err.code ==='auth/wrong-password')
      setError1('Wrong password')
    else if (err.code ==='auth/user-not-found'){
      setError('User not found plz try again')
      setemail('')
      setPassword('')
    }
      
  });}
    return (
      <View>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgb(40,62,96)',
            height: 700,
            width: 450,
          }}>
          <View
            style={{
              marginTop: 30,
              alignSelf: 'center',
      
            }}>
            <Image
              source={require('./images/AQlogo.png')}
              style={{ alignSelf: 'center' ,height:150,width:150 }}
            />
          </View>
  
          <View style={styles.view1}>
            <Ionicon name="mail-outline" style={{ color: 'rgb(40,62,96)' }} size={28} />
            <TextInput placeholderTextColor={'grey'} style={{ color: '' }}
              placeholder=   {t('common:email')} value={email} onChangeText={text=>{setemail(text)}}
            ></TextInput>
          </View>
          {error !== '' ? (
						<Text
							style={{
								color: 'white',
                textAlign:"right",
								fontSize: 11,
                marginRight:34
							}}>
							{error}
						</Text>
					) : null}
          <View style={styles.view1}>
            <Ionicon name="key" style={{ color: 'rgb(40,62,96)' }} size={28} />
            <TextInput  style={{ width: 270 }} secureTextEntry={show ? false : true} value={password} onChangeText={text => setPassword(text) } placeholderTextColor={'grey'}
              placeholder= {t('common:password')}
            ></TextInput>
            <Ionicon
              size={18}
              style={{ marginLeft:35 }}
              name='eye-outline'
              onPress={() => showPass()}
            />
          </View>
          {error1 !== '' ? (
						<Text
							style={{
								color:'white',
                textAlign:"right",
								fontSize: 11,
                marginRight:34
							}}>
							{error1}
						</Text>
					) : null}
          <View>
            <TouchableOpacity
              style={{
                width: 480,
                height: 50,
                marginTop: 5,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('welcome')}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'Regular',
                  color: 'white',
                  padding: 0,
                  textAlign: 'center',
                  marginLeft: 200,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity onPress={getData}
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              borderColor: 'rgb(40,62,96)',
              width: 370,
              height: 50,
              backgroundColor: 'rgb(51,76,114)',
              marginTop: 70,
              justifyContent: 'center',
              shadowColor:'rgb(40,62,96)',
             
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                padding: 0,
                textAlign: 'center',
              }}>
                {t('common:login')}
            </Text>
          </TouchableOpacity>
  
          <View style={{ marginLeft: 120, marginTop: 9, flexDirection: 'row' }}>
            <Text style={{ fontSize: 13, fontWeight: 'Regular', color: 'white' }}>
              Don't have an account?{' '}
            </Text>
  
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'Regular',
                  color: 'white',
                  padding: 0,
                }}>
                 {t('common:signup')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  export { Login }


const styles = StyleSheet.create({

  view1: {
    backgroundColor: 'rgb(242, 242, 242)',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '86%',
    marginLeft: 30,
    marginTop: 40,
    borderRadius: 21,
    padding: 6,
    color: 'grey'
  }})