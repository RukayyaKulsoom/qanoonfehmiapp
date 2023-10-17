import * as React from 'react';
import { Button, TextInput, View, ScrollView, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from 'react-native';
import { Linking } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const dimensions = {
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width
}
function Viewvolumes({ navigation, route }) {
    const [content, setContent] = useState("");

    const storeData = async (id) => {
        try {
            await AsyncStorage.setItem('volumeid', id);
        } catch (e) {
            throw e;
        }
    };
    const { t, i18n } = useTranslation();
    const [data, setdata] = useState([])

    const openPdf1 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/1a031-1.pdf');
    };
    const openPdf2 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/7fb3d-1.pdf');
    };
    const openPdf3 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/74121-3.pdf');
    };
    const openPdf4 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/dd654-4.pdf');
    };
    const openPdf5 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/d3216-1.pdf');
    };
    const openPdf6 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/8d3aa-6.pdf');
    };
    const openPdf7 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/48bc5-dummy.pdf');
    };
    const openPdf8 = () => {
        Linking.openURL('http://ljcp.gov.pk/nljcp/assets/dist/Publication/8.pdf');
    };
    return (

        <View styles={{ flex: 1 }}>
            <View style={styles.welcomebox}>

                <View style={{
                    color: 'white',
                    marginTop: '1%',

                    width: '85%',
                }}>

                    <Text
                        style={{
                            fontSize: 25,
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: '40%',
                            marginTop: '5%',
                        }}>
                        Publications
                    </Text>

                </View>

            </View>
            <View style={{ width: '100%', height: dimensions.screenHeight * 0.88, padding: 10, backgroundColor: "white" }}>
                <ScrollView >

                    <View style={{
                        flexDirection: 'row', width: dimensions.screenWidth * 1,
                    }}>
                        <TouchableOpacity
                            onPress={openPdf1}
                            style={{
                                marginLeft: '5%', marginTop: '3%', width: dimensions.screenWidth * 0.4,
                                height: dimensions.screenHeight * 0.22, borderRadius: 18,  // IOS

                                backgroundColor: '#1B4235',
                                borderColor: 'none',

                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: scale(25), marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 01
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={openPdf2}
                            style={{
                                marginLeft: '5%', marginTop: '3%', width: dimensions.screenWidth * 0.4,
                                height: dimensions.screenHeight * 0.22, borderRadius: 18,  // IOS

                                backgroundColor: '#1B4235',
                                borderColor: 'none',

                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: scale(23), marginLeft: scale(36)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 02
                            </Text>

                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', width: '100%',
                    }}>
                        <TouchableOpacity
                            onPress={openPdf3}
                            style={{
                                marginLeft: '5%', marginTop: '3%', width: '40%', height: 155, borderRadius: 18,  // IOS
                                width: dimensions.screenWidth * 0.4,
                                backgroundColor: '#1B4235',
                                borderColor: 'none',

                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: '15%', marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 03
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openPdf4}
                            style={{
                                marginLeft: '6%', marginTop: '3%', width: '40%', height: 155, borderRadius: 18,  // IOS
                                width: dimensions.screenWidth * 0.4,
                                backgroundColor: '#1B4235',
                                borderColor: 'none',

                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: '15%', marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 04
                            </Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{
                        flexDirection: 'row', width: '100%',
                    }}>
                        <TouchableOpacity
                            onPress={openPdf5}
                            style={{
                                marginLeft: '5%', marginTop: '3%', width: '40%', height: 155, borderRadius: 18,  // IOS
                                width: dimensions.screenWidth * 0.4,
                                backgroundColor: '#1B4235',


                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: '15%', marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 05
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openPdf6}
                            style={{
                                marginLeft: '6%', marginTop: '3%', width: '40%', height: 155, borderRadius: 18,  // IOS
                                width: dimensions.screenWidth * 0.4,
                                backgroundColor: '#1B4235',


                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: '15%', marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 06
                            </Text>

                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', width: '100%',
                    }}>
                        <TouchableOpacity
                            onPress={openPdf7}
                            style={{
                                marginLeft: '5%', marginTop: '3%', width: '40%', height: 155, borderRadius: 18,  // IOS
                                width: dimensions.screenWidth * 0.4,
                                backgroundColor: '#1B4235',


                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: '15%', marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 07
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openPdf8}
                            style={{
                                marginLeft: '6%', marginTop: '3%', width: '40%', height: 155, borderRadius: 18,  // IOS
                                width: dimensions.screenWidth * 0.4,
                                backgroundColor: '#1B4235',


                            }}>
                            <Image resizeMode="cover"
                                source={require('./images/browndoc.png')} style={{
                                    width:'43%',
                                    height: 70, marginTop: '15%', marginLeft: scale(38)
                                }} ></Image>
                            <Text
                                style={{
                                    fontSize: 16,
                                    alignSelf: 'center',
                                    color: 'white',
                                    marginTop: 20,
                                    fontWeight: 'bold',

                                }}>
                                Volume 08
                            </Text>

                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>


        </View>


    );


}
const styles = StyleSheet.create({

    box: {
        backgroundColor: '#F2F2F2',
        margin: 20,
        width: '95%',
        height: 76,
        marginLeft: 10,
        borderRadius: 25,
    },

    welcomebox: {
        width: '100%',
        height: dimensions.screenHeight * 0.1,
        backgroundColor: '#1B4235',
        marginLeft: '0%',
        marginTop: '0%',
        borderRadius: 0,
        flexDirection: 'row',
    }, scrollView: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5'
    },

})
export { Viewvolumes }