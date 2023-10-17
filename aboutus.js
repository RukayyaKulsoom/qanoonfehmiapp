import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { TouchableOpacity, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useTranslation } from "react-i18next";

const Aboutus = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  return (
    <View
      style={{
        flex:1,
        backgroundColor: 'white',
      }}> 
 <ImageBackground resizeMode="cover" 
                    source={require('./images/aboutusbg.png')}
                    style={{ height: '100%', width: '100%' }}
                    >
                       <Image resizeMode="cover"
                        source={require('./images/logobrown.png')} style={{ height: '12%', width: '18%', marginTop: '10%', marginLeft: '42%' }} ></Image>
                  
                  <View style={{ marginTop:'1%',justifyContent:'center',width:'50%', height:'7%', alignItems:'center', alignContent:'center', marginLeft:'26%'}}> 
                  <Text
                        style={{
                            fontSize: 27,
                            fontFamily:'Montserrat',
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: '4%',
                            
                        }}
                    >
                       About Us
                    </Text>
                    </View>
                    <View style={{borderRadius: 20,width:'90%', height:'45%', borderWidth:2, borderColor:'white', marginLeft:'5%', marginTop:20, }}> 
                  <Text
                        style={{
                            fontSize: 18,
                            fontFamily:'Montserrat',
                            color: 'white',
                            fontWeight: 'Regular',
                            padding:15,
                       
                            textAlign:'justify',
                           
                        }}
                    >
                     The Law & Justice Commission of Pakistan
 is a Federal Government institution, headed by the Chief Justice of Pakistan and comprises other members including the Chief Justice of Federal Shariat Court, Chief Justices of the High Courts, Attorney General for Pakistan, Secretary, Ministry of Law, Justice and Human Rights and the Chairperson of National Commission on the Status of Women. 
 
                    </Text>
                    {/* <Text
                        style={{
                            fontSize: 16,
                            fontFamily:'Montserrat',
                            color: 'white',
                            fontWeight: 'Regular',
                            padding:15,
                       
                            textAlign:'justify',
                           
                        }}
                    >
                  
 The Commission comprises of Four other members,
  one from each province, appointed by the Federal Government, on the recommendation of the Chairman, in consultation with the Chief Justice of concerned High Court from amongst the persons who are or have been holders of a judicial or administrative office, eminent lawyers or jurists, persons of repute and integrity from civil society, members of the Council of Islamic Ideology or teachers of law in a university or college
                    </Text> */}
                    </View>
</ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
 
 
})


export { Aboutus }