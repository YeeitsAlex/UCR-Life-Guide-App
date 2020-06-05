import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import * as firebase from 'firebase'

// const ParkingStack = createStackNavigator({
//     Parking: {screen: ParkingScreen},
//     // Lot26: {screen: Lot26Screen},
//     // Lot30: {screen: Lot30Screen},
//     // Lot32: {screen: Lot32Screen},
//     // Lot50: {screen: Lot50Screen},
//     // Lot51: {screen: Lot51Screen},
//     // Lot30: {screen: Lot30Screen},
//   })
const {height} = Dimensions.get('window')  

export default class ParkingScreen extends React.Component{
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
        LayoutAnimation.easeInEaseOut();
        return(
            <SafeAreaView >
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                <View style={styles.headers}>
                    <Text style={styles.title}>Parking Options</Text>                
                </View>
                
                {/* On Campus ParkingOptions */}
                <Text style={styles.header}>On Campus Parking</Text>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot26")}>
                    <Text style={styles.lotNames}>Lot 26</Text>
                    <Text style={styles.lotTypes}>Type: Gold Permit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot30")}>
                    <Text style={styles.lotNames}>Lot 30</Text>
                    <Text style={styles.lotTypes}>Type: Gold Permit</Text>
                </TouchableOpacity>                   
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot32")}>
                    <Text style={styles.lotNames}>Lot 32</Text>
                    <Text style={styles.lotTypes}>Type: Gold Permit</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot50")}>
                    <Text style={styles.lotNames}>Lot 50</Text>
                    <Text style={styles.lotTypes}>Type: Gold Permit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot51")}>
                    <Text style={styles.lotNames}>Lot 51</Text>
                    <Text style={styles.lotTypes}>Type: Gold Permit</Text>
                </TouchableOpacity>

                {/* Off Campus ParkingOptions */}
                {/* <Text style={styles.header}>Off Campus Parking</Text>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("GrandMarc")}>
                    <Text style={styles.housingNames}>Grand Marc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("HighlanderHousing")}>
                    <Text style={styles.housingNames}>Highlander Housing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("CampusCrossing")}>
                    <Text style={styles.housingNames}>Campus Crossing</Text>
                </TouchableOpacity> */}
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
    lotNames: {
        color: "black", 
        fontWeight: "500",
        fontSize: 19,
        
    },
    lotTypes: {
        color: "red",
        fontWeight: "bold",
        fontSize: 12
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
        paddingBottom: 10,
    },
    mainheading: {
        fontSize: 32,
        textAlign: "center",
        paddingTop: 30,
    },
    button1: {
        height: 55,
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