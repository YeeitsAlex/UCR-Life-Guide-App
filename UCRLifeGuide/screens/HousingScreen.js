import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window')  

export default class HousingScreen extends React.Component{
    state={
        screenHeight: 0,
    }
    //Some changes to navigationOptions won't be recognized until we reload the app
    static navigationOptions ={
         headerShown: false
    };

    onContentSizeChange = (contentWidth, contentHeight) =>{
        this.setState({screenHeight: contentHeight});
    }

    render(){
        const scrollEnabled = this.state.screenHeight > height;
        // LayoutAnimation.easeInEaseOut();
        return(
            <SafeAreaView>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                <View style={styles.headers}>
                    <Text style={styles.title}>Housing Options</Text>                
                </View>
                
                {/* On Campus Housing */}
                <Text style={styles.header}>On Campus Housing</Text>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("GlenMor")}>
                    <Text style={styles.housingNames}>Glen Mor</Text>
                </TouchableOpacity>               
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Bannockburn")}>
                    <Text style={styles.housingNames}>Bannockburn Village</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Stonehaven")}>
                    <Text style={styles.housingNames}>Stonehaven</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Falkirk")}>
                    <Text style={styles.housingNames}>Falkirk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("ThePlaza")}>
                    <Text style={styles.housingNames}>The Plaza</Text>
                </TouchableOpacity>

                {/* Off Campus Housing */}
                <Text style={styles.header}>Off Campus Housing</Text>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("GrandMarc")}>
                    <Text style={styles.housingNames}>Grand Marc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("HighlanderHousing")}>
                    <Text style={styles.housingNames}>Highlander Housing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("CampusCrossing")}>
                    <Text style={styles.housingNames}>Campus Crossing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("CampusCrossing")}>
                    <Text style={styles.housingNames}>Berkdale</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("CampusCrossing")}>
                    <Text style={styles.housingNames}>University Towers</Text>
                </TouchableOpacity>
                </ScrollView>
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
    housingNames: {
        color: "black", 
        fontWeight: "500",
         fontSize: 19
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
    // title: {
    //     fontSize: 16,
    //     color: '#a9aaab',
    // },
    header: {
        backgroundColor: '#4169e1',
        fontSize: 20,
        paddingLeft: 15,
        color: '#FFF',
        paddingTop: 10,
        paddingBottom: 10
    },
    mainheading: {
        fontSize: 32,
        textAlign: "center",
        paddingTop: 30,
    },
    button1: {
        height: 45,
        paddingTop: 10,
        paddingLeft: 20,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
    },
    headers: {
        // flexDirection: "row",
        // justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12, 
        borderBottomWidth: 0.5,
        borderBottomColor: "#D8D9DB",
        alignSelf: "center",
        left: 55
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        paddingRight: 120,
        paddingTop: 5,
        fontWeight: "bold",
    },


})