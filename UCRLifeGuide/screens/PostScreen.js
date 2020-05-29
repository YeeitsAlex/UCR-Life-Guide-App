import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image,  SafeAreaView, TextInput} from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import * as firebase from 'firebase'


export default class PostScreen extends React.Component{
    //Some changes to navigationOptions won't be recognized until we reload the app
    // static navigationOptions ={
    //     headerShown: false
    // };

    // signOutUSer = () => {
    //     firebase.auth().signOut();
    // };

    render(){
        // LayoutAnimation.easeInEaseOut();
        return(
            <SafeAreaView style = {styles.container}>
                <View style = {styles.headers}>
                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Q&A Forum")}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight:"500"}}>Post Question</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.userInputContainer}>
                    <Image source={require("../assets/logobelltower.png")} style={styles.logo}></Image>
                    <TextInput autoFocus={true} multiline={true} numberOfLines = {4} style={{flex: 1}} fontSize = {25} placeholder = "Ask a question..."></TextInput>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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