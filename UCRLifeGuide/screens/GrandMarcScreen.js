import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, Image, TextInput, SectionList, Button  } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants';
import * as firebase from 'firebase'
import { apisAreAvailable } from "expo";
// import { NavigationContainer, StackActions,  } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default class GlenMorScreen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text alignItems="center">Sample Text</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


});