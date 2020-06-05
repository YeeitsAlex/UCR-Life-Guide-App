import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from '@expo/vector-icons'; 

//import screens
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import HousingScreen from './screens/HousingScreen';
import ParkingScreen from './screens/ParkingScreen';
import QuestionAnswerScreen from './screens/QuestionAnswerScreen';
import PostScreen from './screens/PostScreen';
import GrandMarcScreen from './screens/HousingScreens/GrandMarcScreen';
import GlenMorScreen from './screens/HousingScreens/GlenMorScreen';
import BannockburnScreen from  './screens/HousingScreens/BannockburnScreen';
import StonehavenScreen from  './screens/HousingScreens/StonehavenScreen';
import CampusCrossingScreen from './screens/HousingScreens/CampusCrossingScreen';
import HighlanderHousingScreen from './screens/HousingScreens/HighlanderHousingScreen';
import Lot30Screen from './screens/ParkingScreens/Lot30Screen';
import Lot50Screen from './screens/ParkingScreens/Lot50Screen';
import Lot51Screen from './screens/ParkingScreens/Lot51Screen';
import Lot26Screen from './screens/ParkingScreens/Lot26Screen';
import Lot32Screen from './screens/ParkingScreens/Lot32Screen';
//End Screen Imports

//Import Firebase config
import FirebaseKeys from "./config";
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

var firebaseConfig = FirebaseKeys;


//Check to see if database initialized already, if not initialize Firebase
//Usually not needed, assume this is needed because I ran firebase init from the command line 
if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseKeys);
}


const HousingStack = createStackNavigator({
  Housing: {screen: HousingScreen},
  GlenMor: {screen: GlenMorScreen},
  Bannockburn: {screen: BannockburnScreen},
  CampusCrossing: {screen: CampusCrossingScreen},
  GrandMarc: {screen: GrandMarcScreen},
  Stonehaven: {screen: StonehavenScreen},
  HighlanderHousing: {screen: HighlanderHousingScreen},
});

const ParkingStack = createStackNavigator({
  Parking: {screen: ParkingScreen},
  Lot26: {screen: Lot26Screen},
  Lot30: {screen: Lot30Screen},
  Lot32: {screen: Lot32Screen},
  Lot50: {screen: Lot50Screen},
  Lot51: {screen: Lot51Screen},
  // Lot30: {screen: Lot30Screen},
})

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
          Home: {
            screen: HomeScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-home" size={24} color={tintColor}></Ionicons>
            }
          },
          Housing:{
            screen: HousingStack,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-bed" size={24} color={tintColor}></Ionicons>
            }
          },
          "Ask a Question": {
            screen: PostScreen,
            navigationOptions: {
              tabBarLabel: () => null, //Hides label for asking a question 
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-add-circle" size={52} color= "gold" style={{shadowColor: "gold", shadowOffset: {width: 0, height: 0}, shadowRadius: 10, shadowOpacity: 0.3}}></Ionicons>
            }
          },
          Parking:{
            screen: ParkingStack,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-car" size={24} color={tintColor}></Ionicons>
            }
          },
          "Q&A Forum":{
            screen: QuestionAnswerScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <AntDesign name="questioncircle" size={24} color={tintColor} />
            }
          }
      },
      {
        defaultNavigationOptions:{
          tabBarOnPress: ({navigation, defaultHandler}) => {
            if (navigation.state.key === "Post"){
              navigation.navigate("postModal")
            }
            else{
              defaultHandler()
            }
          }
        },
        tabBarOptions: {
          //Commented out because the default blue color is what I need 
          // activeTintColor: "blue",
          inactiveTintColor: "#B8BBC4"
        }
      }
    ),
    postModal: {
      screen: PostScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    // initialRouteName: "postModal"
  }
)

// const AppContainer = createStackNavigator(
//   {
//     default: createBottomTabNavigator(
//       {
//           Home: {
//             screen: HomeScreen,
//             navigationOptions: {
//               tabBarIcon: ({tintColor}) => <Ionicons name = "ios-home" size={24} color={tintColor}></Ionicons>
//             }
//           },
//           Housing:{
//             screen: HousingScreen,
//             navigationOptions: {
//               tabBarIcon: ({tintColor}) => <Ionicons name = "ios-bed" size={24} color={tintColor}></Ionicons>
//             }
//           },
//           "Ask a Question": {
//             screen: PostScreen,
//             navigationOptions: {
//               tabBarLabel: () => null, //Hides label for asking a question 
//               tabBarIcon: ({tintColor}) => <Ionicons name = "ios-add-circle" size={52} color= "gold" style={{shadowColor: "gold", shadowOffset: {width: 0, height: 0}, shadowRadius: 10, shadowOpacity: 0.3}}></Ionicons>
//             }
//           },
//           Parking:{
//             screen: ParkingScreen,
//             navigationOptions: {
//               tabBarIcon: ({tintColor}) => <Ionicons name = "ios-car" size={24} color={tintColor}></Ionicons>
//             }
//           },
//           "Q&A Forum":{
//             screen: QuestionAnswerScreen,
//             navigationOptions: {
//               tabBarIcon: ({tintColor}) => <AntDesign name="questioncircle" size={24} color={tintColor} />
//             }
//           }
//       },
//       {
//         defaultNavigationOptions:{
//           tabBarOnPress: ({navigation, defaultHandler}) => {
//             if (navigation.state.key === "Post"){
//               navigation.navigate("postModal")
//             }
//             else{
//               defaultHandler()
//             }
//           }
//         },
//         tabBarOptions: {
//           //Commented out because the default blue color is what I need 
//           // activeTintColor: "blue",
//           inactiveTintColor: "#B8BBC4"
//         }
//       }
//     ),
//     postModal: {
//       screen: PostScreen
//     }
//   },
//   {
//     mode: "modal",
//     headerMode: "none",
//     // initialRouteName: "postModal"
//   }
// )

const AuthStack = createStackNavigator({
    Login: {screen: LoginScreen},
    Register:{screen: RegisterScreen} 
});
  
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: {screen: LoadingScreen},
      App: {screen: AppContainer},
      Auth: {screen: AuthStack},
      // Housing: {screen: HousingStack},
      // Post: {screen: PostScreen}, 
    },
    {
      initialRouteName: "Loading"
    }
  )
)