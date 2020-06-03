import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, FlatList, SafeAreaView, SectionList} from 'react-native'
import * as firebase from 'firebase'
import {Ionicons} from "@expo/vector-icons";
import Constants from 'expo-constants';



export default class HighlanderHousingburnScreen extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <Text style={styles.header}>Highlander Housing Screen</Text> 
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate("Home")}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#000"></Ionicons>
                </TouchableOpacity>
                {/* <FlatList>
                    data={DATA}
                    renderItem={({ item })} => <Item title={item.title}/>
                    keyExtractor={item => item.title}
                </FlatList> */}
            </SafeAreaView>
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
    back: {
        // position: "relative",
        top: 10,
        left: 16,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        backgroundColor: '#bfbfbf',
        fontSize: 20,
        paddingLeft: 15,
        color: '#7d7d7d',
        paddingTop: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },

})