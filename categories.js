import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { TouchableOpacity, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useTranslation } from "react-i18next";
import DropDownPicker from 'react-native-dropdown-picker';
import  {SelectList}  from "react-native-dropdown-select-list";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { ScrollView } from 'react-native';

const Categories = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'  ضعیف العمر شہریوں کا قانون '},
      {key:'2', value:'  خاندانی قوانین'},
      {key:'3', value:'  قانونی طریقہ کار اور دستاویزات'},
      {key:'4', value:'بچوں کے قوانین'},
      {key:'5', value:'  جرم کے متعلق قانون'},
      {key:'6', value:' دوا اور صحت'},
  ]
  return (
    <View
      style={{
        flex:1,
        backgroundColor: 'white',
      }}>
       
 <ImageBackground resizeMode="cover" 
                    source={require('./images/faqbg.png')}
                    style={{ height: '100%', width: '100%' }}
>        
   <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{backgroundColor:'white', marginTop:20, width:'95%', marginLeft:'2%', borderColor:'white'}}
        dropdownStyles={{backgroundColor:'white', width: '95%', marginLeft:'2%'}}
        placeholder="Search Laws by Category"
    />
  <ScrollView
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
    >
<TouchableOpacity  style={{borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}} onPress={()=>navigation.navigate('viewlaws')}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}} >
        
    ضعیف العمر شہریوں کا قانون 
          </Text>
    
</TouchableOpacity>

<TouchableOpacity  style={{borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}} onPress={()=>navigation.navigate('viewlaws')}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}} >
    خاندانی قوانین
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    جائیداد کا قانون    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    قانونی طریقہ کار اور دستاویزات
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    بچوں کے قوانین
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    جرم کے متعلق قانون
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    شہری قانون
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    نقل و حمل

    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    دوا اور صحت
    </Text>
    
</TouchableOpacity>
<TouchableOpacity style={{ borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'8%', borderWidth:1, borderColor:'white', margin:10}}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    کاروباری زراعت کے قوانین
    </Text>
    
</TouchableOpacity>
</ScrollView>
</ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
 
 
})


export { Categories }