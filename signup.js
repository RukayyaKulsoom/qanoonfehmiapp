import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase';
import { ref } from "firebase/database";
import DatePicker from 'react-native-date-picker'


import { set } from 'firebase/database';
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignUp({ navigation })  {
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [show, setShow] = useState(false);
  const [showc, setShowc] = useState(false);
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [notes, setnotes] = useState([]);
  const storeData = async value => {
		try {
			await AsyncStorage.setItem('userId', value);
      await AsyncStorage.setItem('useremail', email);
		} catch (e) {
			throw e;
		}
	};
  const showPass = () => {
    if (show === false) {
      setShow(true);
      return;
    }
    setShow(false);
  };
  const showCPass = () => {
    if (showc === false) {
      setShowc(true);
      return;
    }
    setShowc(false);
  };
  const registerUser = () => {
    setError('');
    setError1('');
    if (password===cpassword){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        storeData(userCredential.user.uid);
        writeUserData(userCredential.user.uid,email, name,date1);
        navigation.navigate('conversion');
        setError('');
        setError1('');
      })
      .catch((err) => {
        console.log(err.code)
        if (err.code === 'auth/invalid-email')
          setError('Invalid Email entered.');
        else if (err.code === 'auth/email-already-in-use')
          setError('Email already in use .');
        else if (err.code === 'auth/weak-password')
          setError1('Weak password entered.');
      });

    }else{
      setError1('Password does not match')
    }
    

  }
  function writeUserData(id,email, name,date1) {
    set(ref(db, 'user/' + id), {
      name: name,
      email: email,
      date: date1,
      id: id,     
    });
    navigation.navigate('conversion');
  }
  return (
    <View>
      
      <Text style={styles.text}>Get Started!</Text>
      <Text style={styles.text2} >Create an account to continue</Text>
      <TouchableOpacity style={styles.view1}>
        <Ionicon name="at" style={{ color: 'rgb(40,62,96)' }} size={28} />
        <TextInput style={{ width: 270 ,color: 'white' } }placeholder="Username" value={name} onChangeText={setname}></TextInput>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view1}>
        <Ionicon name="mail-outline" style={{ color: 'rgb(40,62,96)' }} size={28} />
        <TextInput style={{ width: 270 ,color: 'white' } } value={email} onChangeText={setemail} placeholder="Email"></TextInput>
       
      </TouchableOpacity>
      {error !== '' ? (
						<Text
							style={{
								color: 'rgba(64, 154, 114, 1)',
                textAlign:"right",
								fontSize: 11,
							}}>
							{error}
						</Text>
					) : null}
      <TouchableOpacity style={styles.view1}>
        <Ionicon name="key" style={{ color: 'rgb(40,62,96)' }} size={28} />
        <TextInput style={{ width: 270 ,color: 'white' }} value={password} onChangeText={setPassword} secureTextEntry={show ? false : true} placeholder="Password">
        </TextInput>
        <Ionicon
          size={18}
          style={{ marginLeft: -3 }}
          name='eye-outline'
          onPress={() => showPass()}
        />
        
      </TouchableOpacity>
      {error1 !== '' ? (
						<Text
							style={{
								color:'rgba(64, 154, 114, 1)',
                textAlign:"right",
								fontSize: 11,
							}}>
							{error1}
						</Text>
					) : null}
      <TouchableOpacity style={styles.view1}>
        <Ionicon name="key" style={{ color: 'rgb(40,62,96)' }} size={28} />
        <TextInput style={{ width: 270 ,color: 'white'}} value={cpassword} onChangeText={setCpassword} secureTextEntry={showc ? false : true} placeholder="Confirm Password"></TextInput>
        <Ionicon
          size={18}
          style={{ marginLeft: -3 }}
          name='eye-outline'
          onPress={() => showCPass()}
        />
      </TouchableOpacity>
      < TouchableOpacity style={styles.view1}>
        <Ionicon name="calendar" style={{ color: 'rgb(40,62,96)' }} size={28} onPress={() => setOpen(true)}/>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate1(date.toDateString())
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        <Text  style={{color: 'white'}}>{date1}</Text>
      </TouchableOpacity>
   
        <TouchableOpacity  style={
							styles.btn}
						disabled={
							   name === '' || password === '' || email === '' || password === '' || cpassword==='' || date1 ==='' 
								? true
								: false
						}
						onPress={registerUser} >
          <Text style={{ color: 'rgb(255,255,255)', textAlign: 'center', marginTop: 10,fontSize: 17,
              fontWeight: 'bold',
              color: 'white',}} >SignUp</Text>
        </TouchableOpacity>
     


    </View>
  );
}
export { SignUp }

const styles = StyleSheet.create({
  text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 25,
    marginLeft:20,
    fontWeight: 'bold',
  },
  text2: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 15,
    opacity: 1,
    marginLeft:20,
    marginTop: 7,
  },
  view1: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '86%',
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 21,
    padding: 6,
    color: 'white'

  },
  btn: {
    borderRadius: 15,
    width: '90%',
    margin: 24,
    height: '11%',
    textAlign: 'center',
    backgroundColor: 'rgb(51,76,114)',
    shadowColor:'rgb(40,62,96)',
             
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
  imageBackground: {
    width: '100%',
    height: '50%',
    opacity: 1,

  },
})