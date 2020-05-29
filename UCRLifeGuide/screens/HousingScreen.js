import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, Image, TextInput, SectionList, Button  } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants';
import * as firebase from 'firebase'
import { apisAreAvailable } from "expo";

const DATA = [
    {
      title: "On Campus Housing",
      data: ["Glen Mor", "Bannockburn", "Stonehaven", "Etc"]
    },
    {
      title: "Off Campus Housing",
      data: ["Grand Marc", "Higherlander Housing", "Campus Crossing", "Etc"]
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default class HousingScreen extends React.Component{
    static navigationOptions ={
        headerShown: false
    };
    // "Glen Mor", "Bannockburn", "Stonehaven"
    // "Grand Marc", "Higherlander Housing", "Campus Crossing"
    render(){
        return(
            <View>
                <Text style={styles.mainheading}>Housing</Text>
                <Text style={styles.header}>On Campus Housing</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("GlenMor")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Glen Mor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Bannockburn")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Bannockburn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Stonehaven")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Stonehaven</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Off Campus Housing</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("GrandMarc")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Grand Marc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("HighlanderHousing")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Highlander Housing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("CampusCrossing")}>
                    <Text style={{color: "#a9aaab", fontWeight: "500", fontSize: 17}}>Campus Crossing</Text>
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
    item: {
        padding: 10,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
        paddingLeft: 20,
        color: '#a9aaab',
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
    button:{
        height: 40,
        paddingTop: 10,
        paddingLeft: 20,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
    },

});