import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image,  SafeAreaView, TextInput} from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import Constants from "expo-permissions"
import * as Permissions from "expo-permissions"
import Fire from "../Fire"
// import * as firebase from 'firebase'

const firebase = require('firebase');
require("firebase/firestore");

export default class PostScreen extends React.Component{
    state = {
        text: "",
        // image: null
    }

    handlePost = () => {
        Fire.shared.addPost({text: this.state.text}).then(ref =>{
            this.setState({text: ""});
            this.props.navigation.goBack();
        }).catch(error => {
            console.log(error);
            alert(error);
        });
    };

    render(){
        // LayoutAnimation.easeInEaseOut();
        return(
            <SafeAreaView style = {styles.container}>
                <View style = {styles.headers}>
                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Q&A Forum")}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress ={this.handlePost}>
                        <Text style={{fontWeight:"500"}}>Post Question</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.userInputContainer}>
                    <Image source={require("../assets/logobelltower.png")} style={styles.logo}></Image>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true} 
                        numberOfLines = {4} 
                        style={{flex: 1}} 
                        fontSize = {25} 
                        placeholder = "Ask a question..."
                        onChangeText ={text => this.setState({text})}
                        value ={this.state.text}
                    ></TextInput>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "blue"
        // justifyContent: "center",
        // alignItems: "center"
    },
    greeting:{
        marginTop: 150,
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "#f8f8ff",
    },
    errorMessage:{
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
    },
    form:{
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle:{
        // marginTop: 50,
        marginLeft: 15,
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input:{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    inputPass:{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 32,
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
    imageBackground:{
        flex: 0.5,
        width: null,
        height: null,
        resizeMode: 'contain',
        opacity: .9,
        marginBottom: -35,
        marginTop: -35
    },
    entryMessage: {
        marginTop: 75,
        // marginHorizontal: 150, commented out because textAlign accomplishes the same thing
        textAlign: "center",
        fontSize: 35,
        
    },
    headers: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12, 
        borderBottomWidth: 0.5,
        borderBottomColor: "#D8D9DB",
    },
    userInputContainer: {
        margin: 32,
        flexDirection: "row",
    },
    logo: {
        width: 48, 
        height: 48, 
        borderRadius: 24,
        marginRight: 16
    }

})