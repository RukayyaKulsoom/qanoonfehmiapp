import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useTranslation } from "react-i18next";
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Welcome({ navigation, route }) {

  const storeData = async value => {
		try {
			await AsyncStorage.setItem('languageId', value);

		} catch (e) {
			throw e;
		}
	};
const {t, i18n} = useTranslation();
  
  const selectLanguageCode = i18n.language;

  const LANGUAGES = [
    {key: 'en', label: 'English'},
    {key: 'ur', label: 'اردو'}
  ]; 
  const setLanguage=(key) => {
    return i18n.changeLanguage(key);
  } 
  
    return(
    <View>
  
     
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'rgb(40,62,96)',
          height: 700,
          width: 450,
        
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginTop: 150,
          }}>
                {t('common:languageSelector')}
        </Text>
        <View style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            width:130,
            height:60,
            marginTop:20,
            backgroundColor: 'rgb(51,76,114)',
            justifyContent: 'center',
            shadowColor:'rgb(40,62,96)',
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
            alignSelf: 'center',
            marginLeft: 10,
            
            borderRadius:20,
          }}>

        {LANGUAGES.map((language)=>{
          const selectedLanguage= language.key === selectLanguageCode;
        
          storeData(language.key);
        
          return <TouchableOpacity 
          disabled={selectedLanguage} 
          onPress={()=> setLanguage(language.key) }>
     
      
               <Text style={{
    
    color: 'white',
    alignSelf: 'center',

  }}>{language.label}</Text>

          </TouchableOpacity>

          
          
        }
        )}

       
      </View>            

      <TouchableOpacity  
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              borderColor: 'rgb(40,62,96)',
              width: 370,
              height: 50,
              backgroundColor: 'rgb(51,76,114)',
              marginTop: 200,
              justifyContent: 'center',
              shadowColor:'rgb(40,62,96)',
              flexDirection:'row',
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
             marginLeft:150,
                marginTop:10,
              }}>
                {t('common:next')}
            </Text>
            <Ionicon  name="arrow-forward-circle-outline" style={{ color: 'white',fontWeight: 'bold' , marginLeft:110,marginTop:10}} size={28} onPress={() => navigation.navigate('conversion')} />
          </TouchableOpacity>

      </View>
    </View>
  );
}

export {Welcome}