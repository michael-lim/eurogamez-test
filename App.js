import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCh3Ye9dSntSxvXYkvkMD9PKxazoiyByXU",
  authDomain: "eurogamez-test.firebaseapp.com",
  projectId: "eurogamez-test",
  storageBucket: "eurogamez-test.appspot.com",
  messagingSenderId: "536756149750",
  appId: "1:536756149750:web:7757edfc2bd100e9263bd7",
  measurementId: "G-S8QNB8J9M6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default function App() {

  return (
    // <View style={styles.container}>
    //   <Text>EuroGameZ Test !!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView>
    <Text> Page Content </Text>
  </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
