import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image} from 'react-native'
import * as firebase from 'firebase'
import {Ionicons} from "@expo/vector-icons";

const info = [
    {
        title: "Glen Mor",
        text: "Note: This community only houses second-year students and above. Glen Mor, Gaelic for 'Great Valley', commonly known for the origin of the famous Loch Ness Monster",
        layout: "Single-occupancy rooms in two- and four-bedroom floor plans.",
        occupancy: " Houses more than 1,300 residents",

    },
    {
        title: "Amenities",
        layout: "{`\u2022 ${data}`} Utilities included, \n {`\u2022 ${data}`} basic cable,\n {`\u2022 ${data}`} high-speed Internet,\n {`\u2022 ${data}`} single-occupancy rooms,\n {`\u2022 ${data}`} central air & heater, \n {`\u2022 ${data}`} dining plan,\n {`\u2022 ${data}`} full furnishing,\n {`\u2022 ${data}`} refrigerator,\n {`\u2022 ${data}`} stove,\n {`\u2022 ${data}`} dishwasher",
        occupancy: ""
    },
    {
        title: "Community Features",
        layout: "{`\u2022 ${data}`} Convenience store and grill, \n {`\u2022 ${data}`} Study Rooms, \n {`\u2022 ${data}`} Computer Lab, \n {`\u2022 ${data}`} Intramural fields with night lighting, \n {`\u2022 ${data}`} Bike Storage, \n {`\u2022 ${data}`} Resident Association, \n {`\u2022 ${data}`} Programs and activities, \n {`\u2022 ${data}`} Laundry Rooms, \n {`\u2022 ${data}`} 24-hour assistance, \n {`\u2022 ${data}`} Parking available, \n {`\u2022 ${data}`} Resident Services Office, \n {`\u2022 ${data}`} Gaming Lounge, \n {`\u2022 ${data}`} Pool & BBQ, \n {`\u2022 ${data}`} Coffee, convenience store, home-style meals, and grill - The Market at Glen Mor, \n {`\u2022 ${data}`} Amazon Lockers",
        occupancy: ""
    },
    {
        title: "2 Bedroom / 1 Bath",
        layout: "112 sq. ft. / Bedroom",
        occupancy: "Single-Occupancy Room: $1,210",
    },
    {
        title: "4 Bedrom / 2 Bath",
        layout: "112 sq. ft. / Bedroom",
        occupancy: "Single-Occupancy Room: $1,210",
    }
];

const review = [

]

export default class GlenMorScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.header}>Glen Mor Screen</Text> 
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate("Home")}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#000"></Ionicons>
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

})