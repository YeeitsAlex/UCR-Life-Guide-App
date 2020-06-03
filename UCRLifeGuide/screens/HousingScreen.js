import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image} from 'react-native'
import * as firebase from 'firebase'


export default class HousingScreen extends React.Component{
    //Some changes to navigationOptions won't be recognized until we reload the app
    static navigationOptions ={
         headerShown: false
    };

    // signOutUSer = () => {
    //     firebase.auth().signOut();
    // };

    render(){
        // LayoutAnimation.easeInEaseOut();
        return(
            <View style={styles.container}>

                
                <Text style={styles.header}>On Campus Housing</Text>
                
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("GlenMor")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Glen Mor</Text>
                </TouchableOpacity>               
            
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
    title: {
        fontSize: 16,
        color: '#a9aaab',
    },
    header: {
        backgroundColor: '#bfbfbf',
        fontSize: 20,
        paddingLeft: 15,
        color: '#7d7d7d',
        paddingTop: 10,
    },
    mainheading: {
        fontSize: 32,
        textAlign: "center",
        paddingTop: 30,
    },
    button1: {
        height: 40,
        paddingTop: 10,
        paddingLeft: 20,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
    },


})