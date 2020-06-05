import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import * as firebase from 'firebase'
import DropdownMenu from 'react-native-dropdown-menu'
import DropDownItem from 'react-native-drop-down-item'

const {height} = Dimensions.get('window')  

// content = [
//     {image: '../../assets/Lot26'}
// ]

export default class Lot26Screen extends React.Component{
    state={
        screenHeight: 0,
    }
    //Some changes to navigationOptions won't be recognized until we reload the app
    // static navigationOptions ={
    //     headerShown: false
    // };

    onContentSizeChange = (contentWidth, contentHeight) =>{
        this.setState({screenHeight: contentHeight});
    }

    render(){
        LayoutAnimation.easeInEaseOut();
        const scrollEnabled = this.state.screenHeight > height;
        return(
            <SafeAreaView>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View style={styles.container}>
                        <Text style={styles.cardInfoHeader}>Lot Information</Text>
                        <Text style={styles.cardInfo}>
                            <Text style={{fontSize: 23,fontWeight: "bold"}}>
                                Permits Allowed: 
                                <Text style={{color:"gold", fontWeight: "bold"}}> Gold</Text>,
                                <Text style={{color: "blue",fontWeight: "bold"}}>Blue</Text>, 
                                <Text style={{color: "red", fontWeight: "bold"}}>Red</Text>
                            </Text>
                            {"\n"}
                            Availability to Gold Permits: <Text style={styles.importantText}>7AM-12AM</Text>
                            {"\n"}
                            Average Time to Campus:<Text style={styles.importantText}>15-18 Minutes</Text>    
                            {"\n"}
                            Total Number of Spots:<Text style={styles.importantText}>Fill in spots</Text>
                            {"\n"}
                            Best Time to Park: <Text style={styles.importantText}>Before 9AM, After: 3PM</Text>
                            {"\n"}

                        </Text>               
                    </View>
                    <View style={{height: 600}}>
                        <Image source = {require("../../assets/parkingPictures/Lot26.png")}></Image>
                    </View> 
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3
        // justifyContent: "center",
        // alignItems: "center"
    },
    cardInfoHeader: {
        fontSize: 25,
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    importantText:{
        fontWeight: "bold"
    },
    cardInfo:{
        fontSize: 18
    },
    permit:{
        fontSize: 20,
        color: "red"
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

})