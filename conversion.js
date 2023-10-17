import * as React from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  Clipboard,
  Button,
  TextInput,
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
  , Dimensions
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Voice from '@react-native-community/voice';
import axios from 'axios';
import moment from 'moment';


export const dimensions = {

  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width
}

function ConversionScreen({ navigation }) {
  const { t, i18n } = useTranslation();
  const [result, setResult] = useState('');
  const [messages, setMessages] = useState([]);
  const [faq, setfaq] = useState([]);
  const [askingQuestions, setAskingQuestions] = useState(false);
  const [apiResponses, setApiResponses] = useState([]);

  const getRandomMessages = (allMessages) => {
    const numRandomMessages = 5; // Set the number of random messages you want to display
    const randomMessages = [];

    while (randomMessages.length < numRandomMessages && allMessages.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMessages.length);
      randomMessages.push(allMessages[randomIndex]);
      allMessages.splice(randomIndex, 1);
    }

    // Update the state with the random subset of messages
    setfaq(randomMessages);

  };

  const viewdata = async () => {
    await axios.get("http://10.0.2.2:3003/getallmessage").then((result) => {



      setfaq(result.data);

      // Call a function to randomly select a subset of messages
      getRandomMessages(result.data);
    })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  };


  const sendmsg = async () => {
    if (result !== '') {
      const timestamp = moment().format('hh:mm A');
      const messageData = {
        msg: result,
        timestamp: timestamp,
      };
   
      await axios
        .post('http://10.0.2.2:3003/createmessage', messageData)
        .then(() => {
          setMessages((prevMessages) => [...prevMessages, messageData]);
          setAskingQuestions(true);
          setResult('')
       // Send the user's question to Flask API and set the response
       axios.post('http://10.0.2.2:5000/', { query: result }) // Adjust the endpoint URL
        .then((response) => {
          setApiResponses((prevResponses) => [...prevResponses, response.data.query]);
          console.log(apiResponses);
        })
        .catch((error) => {
          console.error('Error sending query to Flask API:', error);
        });
    })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    } else {
      alert('Enter something');
    }
  };
  useEffect(() => {
    viewdata()

  }, [])
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStartHandler = (e) => {
    console.log('Start handler:', e);
  };

  const onSpeechEndHandler = (e) => {
    console.log('Stop handler:', e);
  };

  const onSpeechResultsHandler = (e) => {
    let text = e.value[0];
    setResult(text);
    console.log('Speech result handler:', e);
  };

  const startRecording = async () => {
    await Voice.start('ur');
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log('Error raised:', error);
    }
  };

  const handleCopyText = async (text) => {
    try {
      await Clipboard.setString(text);
      console.log('Text copied to clipboard:', text);
    } catch (error) {
      console.log('Error copying text:', error);
    }
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -100;

  return (
    <View>
      <View style={styles.welcomebox}>
        <View
          style={{
            color: 'white',
            marginTop: '1%',
            width: dimensions.screenWidth * 0.8,

          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: '40%',
              marginTop: '3%',
            }}>
            Qanoon Fehmi
          </Text>
        </View>
      </View>

      <View style={{
        width: dimensions.screenWidth * 1.0,
        height: "82%", padding: 10, backgroundColor: "white"
      }}>
       {!askingQuestions && (
         <ScrollView >
          <Text style={{
            color: "black",
            fontFamily: "Inter",
            fontStyle: "bold",
            fontSize: 18,
            padding: 10,
            marginLeft:scale(85)
          }} > People also asked</Text>
          {faq.map((item) => {
            return (

              <View key={item._id} >

                <View style={{ width: dimensions.screenWidth * 0.93, justifyContent: "center", marginVertical: '4%', borderWidth: 1, borderColor: '##29453B', borderColor: 'black', borderBottomWidth: 1, borderWidth: 1, backgroundColor: '#29453B', borderRadius: 10 }}>

                <TouchableOpacity onPress={() => handleCopyText(item.msg)}>
          <Text
            style={{
              color: "white",
              fontFamily: "Inter",
              fontStyle: "Regular",
              fontSize: 16,
              padding: 10,
            }}
          >
            {item.msg}
          </Text>
        </TouchableOpacity>
                </View>

              </View>
            );
          })

          }

        </ScrollView>
 )}
        <ScrollView contentContainerStyle={styles.scrollViewContent} inverted>
          {messages.map((message, index) => (
            <View key={index}>
              <View
                style={{
                  marginLeft: '36%',
                  width: dimensions.screenWidth * 0.6,

                  backgroundColor: '#29453B',
                  justifyContent: 'center',
                  marginVertical: '4%',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '##29453B',
                }}>
                <TouchableOpacity onPress={() => handleCopyText(message.msg)}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Inter',
                      fontStyle: 'Regular',
                      fontSize: 16,
                      padding: 10,
                    }}>
                    {message.msg}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginLeft: '1%',
                  width: dimensions.screenWidth * 0.8,

                  backgroundColor: '#9F7157',
                  justifyContent: 'center',
                  marginVertical: '1%',
                  borderRadius: 10,

                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Inter',
                    fontStyle: 'Regular',
                    fontSize: 16,
                    padding: 10,
                  }}>
                     {apiResponses[index]}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        backgroundColor="white"
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{ flex: 1 }}>
        <View style={{
          height: dimensions.screenHeight * 1.0, marginTop: "7%", width: dimensions.screenWidth * 0.99, backgroundColor: "white"
        }}>
          <View style={styles.textInputStyle}>
            <TouchableOpacity onPress={() => sendmsg()}>
              <Image
                resizeMode="cover"
                source={require('./images/send.png')}
                style={{
                  marginLeft: '0%',
                  height: 30,
                  width: 35,
                  marginTop: '0%',
                  position: 'relative',
                }}
              />
            </TouchableOpacity>

            <TextInput
              multiline
              value={result}
              placeholder={t('common:text')}
              style={{ flex: 1 }}
              onChangeText={(text) => setResult(text)}
            />

            <TouchableOpacity onPress={startRecording}>
              <Image
                resizeMode="cover"
                source={require('./images/mic.png')}
                style={{
                  height: 33,
                  width: 20,
                  marginTop: '1%',
                  color: '#29453B',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5'
  },
  welcomebox: {
    width: '100%',
    height: 60,
    backgroundColor: '#29453B',

  },
  box: {
    backgroundColor: '#F2F2F2',
    margin: 20,
    width: '80%',
    height: 76,
    marginLeft: 10,
    borderRadius: 25,
  },
  imageBackground: {
    width: '100%',
    height: '85%',
    opacity: 1,
    marginTop: 50,

  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: dimensions.screenHeight * 0.088,
    borderRadius: 30,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
    marginTop: '1%',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    marginLeft: '1%',


  }
})
export { ConversionScreen }