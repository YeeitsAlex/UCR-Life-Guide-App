import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import * as firebase from 'firebase';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyAjiPNybkiq3YnK9LyySsg9Bbsf0rHDPPE",
    authDomain: "ucrlifeguide.firebaseapp.com",
    databaseURL: "https://ucrlifeguide.firebaseio.com",
    projectId: "ucrlifeguide",
    storageBucket: "ucrlifeguide.appspot.com",
    messagingSenderId: "930611404938",
    appId: "1:930611404938:web:3caa9fb2fb57b2c389cd73"
  };

//Check to see if database initialized already, if not initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// console.log(firebase.name);
// console.log(firebase.name);
// console.log(firebase.database());
// firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: {screen: HomeScreen},  
});

const AuthStack = createStackNavigator({
    Login: {screen: LoginScreen},
    Register:{screen: RegisterScreen} 
});
  
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: {screen: LoadingScreen},
      App: {screen: AppStack},
      Auth: {screen: AuthStack} 
    },
    {
      initialRouteName: "Loading"
    }
  )
)