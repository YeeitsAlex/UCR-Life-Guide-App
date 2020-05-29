import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, Image, TextInput, SectionList, Navigation} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants';
import * as firebase from 'firebase'
import { apisAreAvailable } from "expo";
import { NavigationContainer } from '@react-navigation/native';

export default class FAQScreen extends React.Component{
    /*
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }
    */
    static navigationOptions ={
        headerShown: false
    };

    render(){
        return(
            
            <View styles={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("FAQ")}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>FAQ</Text>
                </TouchableOpacity>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    textstyle: {
        fontSize: 16,
    },
    button:{
        marginTop: 30,
        marginHorizontal: 30,
        backgroundColor: '#4169e1',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },

});