import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { ScrollView,TouchableOpacity, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useTranslation } from "react-i18next";
import DropDownPicker from 'react-native-dropdown-picker';
import  {SelectList}  from "react-native-dropdown-select-list";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Faqs = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = React.useState("");
   const [messages, setmessages] = useState([]);
  const [search, setsearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setdata] = useState([]);
  const [show,setshow] = useState(false);

  const dataz = [
      {key:'1', value:' معائدے بیع مال  کی خلاف ورزئ '},
      {key:'2', value:'دھوکہ دہی'},
      {key:'3', value:' کاروبار سے متعلق قوانین'},
      {key:'4', value:'بچوں کے قوانین'},
      {key:'5', value:'  جرم کے متعلق قانون'},
      {key:'6', value:' خوراکی موادکے معیارات' },
      {key:'7', value:'شادی سے متعلق قوانین '},
      {key:'7', value:'فراڈ'},
  ]
  
  const showing=()=>{
    setshow(!show);
  }

  

  const viewdata = async () => {
    await axios.get("http://10.0.2.2:3003/getallmessage").then((result) => {  
      console.log("Getting one data");
      console.log(result.data);
      setSearchResults(result.data);
      setmessages(result.data)
    })
    .catch((error) => {
     // Handle any errors that occur
     console.error(error);
  });
  };
  useEffect(() => {
    searchfunc()
  
  }, [selected])

  useEffect(() => {
   viewdata()
  
  }, [show])

  const searchfunc = () => {
   console.log(selected)
    if (selected !== "") {
      const newarray = messages.filter((msg) => {
        console.log(msg);
        return Object.values(msg)
          .join(" ")
          .toLowerCase()
          .includes(selected.toLowerCase());
      });

      setSearchResults(newarray)
    
    } else {
      setSearchResults(messages);
   
    }
  }

  return (
    <View
      style={{
        flex:1,
        backgroundColor: 'white',
      }}>
       

          
   <SelectList 
   className="custom-select-list"
        setSelected={(val) => setSelected(val)} 
        data={dataz} 
        msg={selected.length <= 1 ? messages : searchResults}
        save="value"
        boxStyles={{color:'white',backgroundColor:'white', marginTop:20, width:'95%', marginLeft:'2%', borderColor:'#1B4235'}}
        dropdownStyles={{backgroundColor:'#1B4235', width: '95%', marginLeft:'2%',color:'white',borderColor:'#1B4235'}}
        placeholder="Search in List"
        inputStyles={{ color: 'black' }}
        dropdownTextStyles={{ color: 'white' }}
        
    />
<View style={{ width:'100%', height:'100%',padding :10}}>
{/* 
<TextInput
        style={{
          marginTop: 10,
          borderWidth: 2,
          borderColor: 'white',
          padding: 10,
          borderRadius: 10,
          fontSize: 16,
          width: '99%',
          alignSelf: 'center',
          color:'white'
        }}
        msg={search.length <= 1 ? messages : searchResults}
        placeholder= {t('common:search')}
        value={search}
        onChangeText={(text)=> setsearch(text)}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
        placeholderTextColor="#CCCCCC"
      />  */}
<ScrollView >

{ searchResults.map((item)=>{
  return (
    <View key={item._id} >
        
      <View style={{marginLeft:'1%',width:'98%',justifyContent: "center",marginVertical:'3%',borderWidth:1,borderColor:'#1B4235', borderTopWidth:0, borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:4,borderLeftColor: 'green', borderRadius:5,backgroundColor:'#FAFAFA',    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,}}>
    
        <Text
        style={{
          color: "#1B4235",
          fontFamily: "Inter",
          fontStyle: "Regular",
          fontSize: 16,
          
          padding: 10,
        
        }}
      >
        {item.msg}
      </Text>
</View>

    </View>
  );
})

}

</ScrollView>
</View>

    </View>

  );
}

const styles = StyleSheet.create({

 
})


export { Faqs }