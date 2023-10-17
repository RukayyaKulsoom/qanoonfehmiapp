import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDFq4H6QZA94Vu_PQ-_zCyl5fji-HVl0U0",
  authDomain: "asaanqanoon-d627c.firebaseapp.com",
  projectId: "asaanqanoon-d627c",
  storageBucket: "asaanqanoon-d627c.appspot.com",
  messagingSenderId: "1004163318209",
  appId: "1:1004163318209:web:1724206927e60956ef2f40",
  measurementId: "G-BBXP8ENRLX"
};

const app = firebase.initializeApp(firebaseConfig);
var auth = initializeAuth(app,{
	persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);

const db = getDatabase(app);
export { auth, db };