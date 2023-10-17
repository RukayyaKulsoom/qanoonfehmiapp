import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useTranslation } from "react-i18next";
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

 export const dimensions= {
    
        screenHeight : Dimensions.get('window').height,
        screenWidth : Dimensions.get('window').width
    }

function Start({ navigation, route }) {
 
    const { t, i18n } = useTranslation();

    const selectLanguageCode = i18n.language;

    const LANGUAGES = [
        { key: 'en', label: '  English  /' },
        { key: 'ur', label: '  اردو  '   }
    ];
    const setLanguage = (key) => {
        return i18n.changeLanguage(key);
    }
    const storeData = async value => {
        try {
            await AsyncStorage.setItem('languageId', value);

        } catch (e) {
            throw e;
        }
    };
  return (
    <View style={{  width:dimensions.screenWidth*1.01,
        height:dimensions.screenHeight*1.01, backgroundColor:'black', display:'flex'}}>
 
 <ImageBackground resizeMode="cover" 
                    source={require('./images/bghome.png')}
                    style={{ height: '100%', width: '100%' }}
                    >

                <View style={{
                    color: 'white',
                    marginTop: '4%',
                    width:dimensions.screenWidth*0.60,
                    height:dimensions.screenHeight*0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '20%',

                }}>
                    <Text
                        style={{
                            fontSize: 23,
                            color: 'white',
                            fontWeight: 'semi-bold',
                            marginLeft: '4%',
                            fontFamily:'Inter',
                            
                        }}>
                        Welcome to
                    </Text>


                    <Text
                        style={{
                            fontSize: 30,
                            fontFamily:'Montserrat',
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: '4%',
                        }}
                    >
                        Qanoon Fehmi
                    </Text>

                    <Text
                        style={{
                            fontSize: 17,
                            color: '#D0A48A',
                            fontWeight: 'Medium',
                            marginLeft: '4%',
                            fontFamily:'Inter',
                            padding:scale(10)
                        }}>
                       Select Your language

                    </Text>
                </View>  

        
                <Text
                style={{ marginLeft:'36%',marginTop:scale(1)}}
                >
                    {LANGUAGES.map((language) => {
                        const selectedLanguage = language.key === selectLanguageCode;
                        storeData(language.key);
                        return <TouchableOpacity 
                                key={language.key}
                            disabled={selectedLanguage}
                   
                            onPress={() => setLanguage(language.key)}>
                            <Text 
                            style={{
                                fontSize:17,
                                color: 'white',
                               
                               fontWeight:'bold'

                            }}>{language.label}</Text>

                        </TouchableOpacity>

                    }
                    )}
                </Text>
         

       <View style={{
       marginLeft:scale(10), flexDirection: 'row',position: 'absolute', marginTop:scale(2),  width:dimensions.screenWidth*0.95,
 
            }}>
                <TouchableOpacity
onPress={()=>navigation.navigate('viewvolumes')}
                    style={{
                       margin:20, marginLeft: '4%', marginTop:scale(150),   width:dimensions.screenWidth*0.40,
                       height:dimensions.screenHeight*0.23, borderRadius: 18,  // IOS
              
                        borderColor: '#B88364',
                        borderWidth: 2,
                    }}>
                    <Image resizeMode="cover"   
                        source={require('./images/document.png')} style={{  height:75, width:70 , marginTop: '15%', marginLeft: '25%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 15,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 10,
                            fontWeight: 'bold',
                             textAlign:'center'

                        }}>
                        {t('common:publications')}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
onPress={()=>navigation.navigate('conversion')}
                    style={{
                        marginLeft: '1%', marginTop:scale(150), width:dimensions.screenWidth*0.40,
                        height:dimensions.screenHeight*0.23, borderRadius: 18,  // IOS
                  
                        borderColor: '#B88364',
                        borderWidth: 2,
                    }}>
                    <Image resizeMode="cover"   
                        source={require('./images/chat.png')} style={{  height:67, width:75 ,marginTop: '13%', marginLeft: '23%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 12,
                            fontWeight: 'bold',

                        }}>
                        {t('common:chat')}
                    </Text>

                </TouchableOpacity>
                


                <View style={{
                flexDirection: 'row', width:dimensions.screenWidth*0.40,  marginLeft:scale(10),
                height:dimensions.screenHeight*0.23, position: 'absolute', marginTop:scale(300)
            }}>
                 <TouchableOpacity
onPress={()=>navigation.navigate('faqs')}
                    style={{
                        margin:20, marginLeft: '4%', width:dimensions.screenWidth*0.40,
                        height:dimensions.screenHeight*0.23, borderRadius: 18,  // IOS
                        borderColor: '#B88364',
                        borderWidth: 2,
                    }}>
                    <Image resizeMode="cover"   
                        source={require('./images/faqs.png')} style={{display: 'flex', marginTop: '15%', marginLeft: '25%', height:70, width:70 }} ></Image>
                    <Text
                        style={{
                            fontSize: 17,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 10,
                            fontWeight: 'bold',

                        }}>
                        {t('common:faqs')}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
onPress={()=>navigation.navigate('aboutus')}
                    style={{
                        marginLeft: '1%', width:dimensions.screenWidth*0.40,
                        height:dimensions.screenHeight*0.23, borderRadius: 18,  // IOS
                  marginTop:scale(20),
                        borderColor: '#B88364',
                        borderWidth: 2,
                    }}>
                    <Image resizeMode="cover"   
                        source={require('./images/aboutus.png')} style={{  height:65, width:78 , marginTop: '13%', marginLeft: '23%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 20,
                            fontWeight: 'bold',

                        }}>
                        {t('common:Aboutus')}
                    </Text>

                </TouchableOpacity>
                </View>

            </View>

                </ImageBackground>


            </View>
   
  )
}
const styles = StyleSheet.create({




})
export {Start}
