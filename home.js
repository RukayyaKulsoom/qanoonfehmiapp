import * as React from 'react';
import { TouchableOpacity, ScrollView, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({ navigation, route }) {

    const storeData = async value => {
        try {
            await AsyncStorage.setItem('languageId', value);

        } catch (e) {
            throw e;
        }
    };
    const { t, i18n } = useTranslation();

    const selectLanguageCode = i18n.language;

    const LANGUAGES = [
        { key: 'en', label: 'English /' },
        { key: 'ur', label: ' اردو' }
    ];
    const setLanguage = (key) => {
        return i18n.changeLanguage(key);
    }


    return (
        <View styles={{ flex: 1, width: '100%', height: 770, backgroundColor: '#007748' }}>
            <View style={styles.welcomebox}>
                <View style={{
                    color: 'white',
                    marginTop: '15%',

                    width: '65%',
                }}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: '4%',
                        }}>
                        Welcome to

                    </Text>


                    <Text
                        style={{
                            fontSize: 30,

                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: '4%',
                        }}
                    >
                        QanoonFehmi
                    </Text>
                </View>

                <Image resizeMode="cover"
                    source={require('./images/logo-01.png')} style={{ marginLeft: '35%', height: 120, width: '100%', marginTop: '9%', ...StyleSheet.absoluteFillObject, }} ></Image>
            </View>


            <View style={{
                width: '96%',
                height: 480,
                backgroundColor: '#FFFFFF',
                marginLeft: '2%',
                marginTop: '9%',
                borderRadius: 10,
                borderColor: '#C2C2C2',
                borderWidth: 1,

            }}>

            </View>


            <TouchableOpacity
                style={{

                    borderRadius: 10,
                    borderColor: 'rgba(2, 116, 69, 1)',
                    width: '35%',
                    height: 20,
                    backgroundColor: "rgba(2, 116, 69, 1)",

                    justifyContent: "center",
                    marginLeft: '58%',
                    marginTop: '47%',
                    ...StyleSheet.absoluteFillObject,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "semi-bold",
                        color: "white",
                        padding: 0,
                        textAlign: "center",
                    }}
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
                                fontSize:16,
                                color: 'white',
                                alignSelf: 'center',

                            }}>{language.label}</Text>

                        </TouchableOpacity>

                    }
                    )}
                </Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row', width: '91%', ...StyleSheet.absoluteFillObject,
            }}>
                <TouchableOpacity
onPress={()=>navigation.navigate('viewvolumes')}
                    style={{
                        marginLeft: '4%', marginTop: '65%', width: '50%', height: 190, backgroundColor: 'white', borderRadius: 10, shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1, //IOS
                        backgroundColor: '#fff',
                        elevation: 4, // Android
                        borderColor: '#C2C2C2',
                        borderWidth: 1,
                    }}>
                    <Image resizeMode="cover"   
                        source={require('./images/volume.png')} style={{ height: 45, width: '30%', marginTop: '35%', marginLeft: '35%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'black',
                            marginTop: 10,
                            fontWeight: 'bold',

                        }}>
                        {t('common:publications')}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
onPress={()=>navigation.navigate('viewvolumes')}
                    style={{
                        marginLeft: '2%', marginTop: '65%', width: '50%', height: 190, backgroundColor: 'white', borderRadius: 10, shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1, //IOS
                        backgroundColor: '#fff',
                        elevation: 4, // Android
                        borderColor: '#C2C2C2',
                        borderWidth: 1,
                    }}>
                    <Image resizeMode="cover"
                        source={require('./images/faqs.png')} style={{ height: 45, width: '30%', marginTop: '35%', marginLeft: '35%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'black',
                            marginTop: 30,
                            fontWeight: 'bold',

                        }}>
                        {t('common:faqs')}
                    </Text>

                </TouchableOpacity>



            </View>

            <View style={{
                flexDirection: 'row', width: '91%', ...StyleSheet.absoluteFillObject,
            }}>
                <TouchableOpacity

                    style={{
                        marginLeft: '4%', marginTop: '127%', width: '50%', height: 190, backgroundColor: 'white', borderRadius: 10, shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1, //IOS
                        backgroundColor: '#fff',
                        elevation: 4, // Android
                        borderColor: '#C2C2C2',
                        borderWidth: 1,
                    }}>
                    <Image resizeMode="cover"
                        source={require('./images/aboutus.png')} style={{ height: 45, width: '30%', marginTop: '35%', marginLeft: '35%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'black',
                            marginTop: 30,
                            fontWeight: 'bold',

                        }}>
                        {t('common:Aboutus')}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity   onPress={()=>navigation.navigate('feedback')}

                    style={{
                        marginLeft: '2%', marginTop: '127%', width: '50%', height: 190, backgroundColor: 'white', borderRadius: 10, shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1, //IOS
                        backgroundColor: '#fff',
                        elevation: 4, // Android
                        borderColor: '#C2C2C2',
                        borderWidth: 1,
                    }}
                   >
                    <Image resizeMode="cover"
                        source={require('./images/feedback.png')} style={{ height: 45, width: '30%', marginTop: '35%', marginLeft: '35%' }} ></Image>
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'black',
                            marginTop: 30,
                            fontWeight: 'bold',

                        }}>
                        {t('common:feedback')}
                    </Text></TouchableOpacity>
<TouchableOpacity 
                    style={{
                        marginLeft: '79%', marginTop: '195%', width: '10%', height: 1, backgroundColor: 'white', borderRadius: 10,
                       
                         ...StyleSheet.absoluteFillObject,
                    }} onPress={()=>navigation.navigate('conversion')}>
                <ImageBackground resizeMode="cover" 
                    source={require('./images/chat.png')}
                    style={{ marginLeft: '1%', height: 60, width: '110%', marginTop: '4%', ...StyleSheet.absoluteFillObject, }}
                    >
                </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    welcomebox: {
        width: '96%',
        height: 150,
        backgroundColor: '#2C6E49',
        marginLeft: '2%',
        marginTop: '2%',
        borderRadius: 10,
        flexDirection: 'row',
    },




})
export { Home }