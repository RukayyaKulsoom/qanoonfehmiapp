import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground,  Dimensions,} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

function Splash({ navigation, route }) {
    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('home')},1000);
      });

      
    return(
        <View  style={{
          width:windowWidth * 1.0,height:windowWidth * 1.0,flex: 1,backgroundColor:'#007748', display:'flex'
        }}  >
            <Image
				source={require('./images/qanoonfehmilogo.png')}
                style={{
                    height:windowWidth * 2.1,width:windowWidth * 1.0, 
                  }}    			></Image>
      </View>
    );
}

export { Splash }