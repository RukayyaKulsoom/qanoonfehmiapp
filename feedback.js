import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { TouchableOpacity, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useTranslation } from "react-i18next";

const Feedback = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const [review,setReview] = useState('');

  const [result, setResult] = useState('')

  const storeData = async (id) => {
		try {
			await AsyncStorage.setItem('fbid', id); 
		} catch (e) {
			throw e;
		}
	};
  const sendreview = async () => {
    
  await axios.post("http://10.0.2.2:3003/createfeedback",{email:result,feedback:review}).then((response) => {  
       storeData(response.data._id)
      console.log('abcdddddd')
      alert("Your review has been saved!");
    });

    try{
      console.log(result.data)
    }catch(e){
      console.log(e)
    }m
  
};

const deletefeedback = async () => {

var id=await AsyncStorage.getItem('fbid')

await axios.delete("http://10.0.2.2:3003/deletefeedback/"+id)
.then(response => {
  
  alert('Feedback Deleted')
  console.log('Resource deleted:', response.data);
  setResult('')
  setReview('')
})
.catch(error => {
  console.error('Error deleting resource:', error);
});

};

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
                        source={require('./images/logobrown.png')} style={{ height: '12%', width: '18%', marginTop: '4%', marginLeft: '42%' }} ></Image>
             
                    <View style={{width:'100%', height:'100%',padding:25}}> 
                    <View > 
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            width: '95%',
            marginLeft: '9%',
            marginTop: 1
          }}>
          {t('common:helpus')}
        </Text>
        <TextInput
       
        value={result}
        onChangeText={setResult}
          placeholder={t('common:email')} placeholderTextColor={'grey'}
          style={{
            color: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            width: '98%',
            height: 45,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: 20,
            justifyContent: 'center',
            fontSize: 17,
            borderWidth:1,
            borderColor: '#C2C2C2',
            padding:10

          }}></TextInput>

        <TextInput value={review} onChangeText={setReview}
          multiline={true} placeholderTextColor={'grey'} placeholder={t('common:text')}
          style={{
            marginTop: 17, color: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            width: '98%',
            height: 200, 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth:1,
            borderColor: '#C2C2C2',
          }}></TextInput>

      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={()=>sendreview()}
          style={{
            borderRadius: 20,
            borderColor: '#B88364',
            width: '45%',
            height: 50,
            backgroundColor: "#B88364",
            alignItems:'center',
            alignContent:'center',
            marginLeft: '2%',
            marginTop: '10%',
         }}>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: 'white',
              marginTop: 13,
              fontWeight: 'bold'
            }}>
            {t('common:sendfeedback')}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
            deletefeedback();
          }}
          style={{ 
            borderRadius: 20,
            borderColor: '#B88364',
            width: '45%',
            height: 50,
            backgroundColor: "#B88364",
            alignItems:'center',
            alignContent:'center',
            marginLeft: '4%',
            marginTop: '10%',
           }}>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: 'white',
              marginTop: 13,
              fontWeight: 'bold'
            }}>
                {t('common:deletefeedback')}
          </Text>
        </TouchableOpacity>

      </View>
                    </View>



      
      
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  c_text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 28,
    opacity: 1,
    marginTop: 30,
    fontWeight: 'bold',
  },
  c_text2: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    opacity: 1,
    marginTop: 2,
    fontWeight: 'bold',
  },
  c_box: {
    backgroundColor: 'rgb(142,147,147)',
    margin: 20,
    width: '95%',
    height: 200,
    marginLeft: 10,
    borderRadius: 15,
  },
  c_imageBackground: {
    width: '100%',
    height: '85%',
    opacity: 1,
    marginTop: 50,

  },
  c_btn: {
    borderRadius: 15,
    width: '80%',
    marginLeft: 40,
    height: '30%',
    textAlign: 'center',
    backgroundColor: '#007748',

  },
})


export { Feedback }