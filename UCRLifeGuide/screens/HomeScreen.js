import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image} from 'react-native'
import * as firebase from 'firebase'
import Fire from '../Fire'

require('firebase/firestore')

export default class HomeScreen extends React.Component{
    //Some changes to navigationOptions won't be recognized until we reload the app
    static navigationOptions ={
        headerShown: false
    };

    state = {
        email: "",
        displayName: ""
    };
    
    componentDidMount(){
        if(!firebase.auth().currentUser.isAnonymous){
            const {email, displayName} = firebase.auth().currentUser;

            this.setState({email, displayName});
        }
    }

    signOutUser = () => {
        console.log("Trying to logout..");
        firebase.auth().signOut().then(() => console.log("User signed out!"));
    };

    loggedInMessage = () => {
        if(!firebase.auth().currentUser.isAnonymous){
            return (<Text style={styles.entryMessage}>{'Welcome back, \n'}{this.state.displayName}!</Text>)
        }
        else{
            return (<Text style={styles.guestEntryMessage}>{'Welcome!\n You are signed in as a Guest User'}!</Text>)
        }
    }

    render(){
        LayoutAnimation.easeInEaseOut();
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <ImageBackground style= {styles.imageBackground} source={require("../assets/LifeAtUCR.png")}></ImageBackground>

                {this.loggedInMessage()}
                {/* <Text style={styles.entryMessage}>{'Welcome back, \n'}{this.state.displayName}!</Text> */}

                <TouchableOpacity style={styles.button} onPress={() => this.signOutUser()}>
                    <Text style={{color: "#FFF", fontWeight: "500", paddingBottom: 15, fontSize: 15}}>Logout</Text>
                </TouchableOpacity>

                
            </View>
        )
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
        flex: 1,
        // marginTop: 30,
        marginHorizontal: 83,
        backgroundColor: '#4169e1',
        borderRadius: 4,
        height: 52,
        width: 250,
        alignItems: "center",
        justifyContent: "flex-end",
        position: 'absolute',
        bottom: 0,
        marginBottom: 32,
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
    guestEntryMessage:{
        marginTop: 75,
        // marginHorizontal: 150, commented out because textAlign accomplishes the same thing
        textAlign: "center",
        fontSize: 35,
    },
    button2:{
        marginTop: 30,
        marginHorizontal: 30,
        backgroundColor: '#4169e1',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },

})