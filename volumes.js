import * as React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Pressable,
  SafeAreaView,
  Platform, KeyboardAvoidingView
} from "react-native";
import { Viewvolumes } from "./viewvolumes";
import { useTranslation } from "react-i18next";
import { useState, useEffect ,useRef} from "react";
import axios from 'axios';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";


function Volumes({ navigation, route }) {
//   const { t, i18n } = useTranslation();
//   const _editor = React.createRef();
//   const richText = useRef();

//   // const getid = async () => {
//   //   console.log(await AsyncStorage.getItem('volumeid'));

//   // }
//   const updatevolume = async () => {
//     var id = await AsyncStorage.getItem('volumeid');
//     var det= data
   
//     await axios.put("http://10.0.2.2:3003/updateqanoon/"+id,{content:det}).then(() => {  
//       alert("Content Updated");
//     });

//     try{
//       console.log(data.data)
//     }catch(e){
//       console.log(e)
//     }
  
// };

  const GettingVolume = async () => {
    await axios.get("http://10.0.2.2:3003/getoneqanoon/" +  await AsyncStorage.getItem('volumeid')).then((data) => {
     
     setdata(data.data)
    });
  };
  useEffect(() => {
    GettingVolume();
 }, []);

 const [data, setdata] = useState('')
console.log(data)

  return (
   
  
  
  <View
       
  style={{
    width: '95%',
    height: 700,
    backgroundColor: '#FFFFFF',
    marginLeft: '2%',
    marginTop:'3%',
    borderRadius: 10,
    borderColor: '#C2C2C2',
    borderWidth: 1,

}}>

<ScrollView>

    <View key={data.id}>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "normal",
            color: "black",
            padding: '3%',
            textAlign:'right',
            marginRight:'2%',
            marginTop:'1%'
          }}
        >
          {data.content}
        </Text>
 
    </View>


</ScrollView>
             

  

        {/* <SafeAreaView>
            <ScrollView>
             
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
                    <Text>Description:</Text>
                    <RichEditor
                        ref={richText}
                        onChange={(text) => setdata(text)}
                    />
                </KeyboardAvoidingView>
            </ScrollView>

            <RichToolbar
                editor={richText}
                actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, ]}
                iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
            />
        </SafeAreaView> */}
{/*   
<Pressable  onPress={() => updatevolume()}
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgb(40,62,96)',
            width: 370,
            height: 45,
            backgroundColor: 'rgb(40,62,96)',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
              {'Update Data'}
          </Text>
          </Pressable> */}
        
</View>  
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F2F2F2",
    margin: 20,
    width: "95%",
    height: 76,
    marginLeft: 10,
    borderRadius: 25,
  },
  input: {
    height: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  root: {
    flex: 1,width:300,
    height:50,
    backgroundColor: '#eaeaea',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 2,
    

    backgroundColor: 'white',
  },
});

export { Volumes };