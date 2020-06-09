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
                
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot1")}>
                    <Text style={styles.lotNames}>Lot 1</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "red", fontWeight: "bold"}}> Red, <Text style={{color: "blue"}}>Blue</Text><Text style={{color: "black"}}>, Visitors</Text></Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot6")}>
                    <Text style={styles.lotNames}>Lot 6</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "red", fontWeight: "bold"}}> Red, <Text style={{color: "blue"}}>Blue</Text><Text style={{color: "black"}}>, Visitors</Text></Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot24")}>
                    <Text style={styles.lotNames}>Lot 24</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "red", fontWeight: "bold"}}> Red, <Text style={{color: "blue"}}>Blue</Text></Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot26")}>
                    <Text style={styles.lotNames}>Lot 26</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "gold", fontWeight: "bold"}}> Gold Permit</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot30")}>
                    <Text style={styles.lotNames}>Lot 30</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "gold", fontWeight: "bold"}}> Gold Permit</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot31")}>
                    <Text style={styles.lotNames}>Lot 31</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "gold", fontWeight: "bold"}}> Gold Permit</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Lot50")}>
                    <Text style={styles.lotNames}>Lot 50</Text>
                    <Text style={styles.lotTypes}>Best For: 
                        <Text style={{color: "gold", fontWeight: "bold"}}> Gold Permit</Text>
                    </Text>
                </TouchableOpacity>

                {/* Off Campus ParkingOptions */}
                <Text style={styles.header}>Off Campus Parking</Text>
                <Text style={styles.infoCard}>
                    <Text style={styles.cardInfo}>
                        <Text style={{textAlign: "center", textDecorationLine: "underline", color: "red"}}>Important Notice</Text>
                        {"\n"}
                        <Text style={{fontSize: 25, textAlign: "center"}}>*NOT RECOMMENDED*</Text>
                        {"\n"}
                        <Text>Information for off-campus parking has been removed due to many current students reporting regular break-ins to their vehicles when
                            parking in neighborhoods close to school. Please do your best to not park off-campus, it is not worth it. If you must drive, try to park at the Hunter 
                            Park station parking lot and take the bus to school. 
                        </Text>
                    </Text>
                </Text>
                <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate("HunterPark")}>
                    <Text style={styles.lotNames}><Text style={{fontWeight: "bold"}}>Hunter Park Station Instructions</Text></Text>
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
    lotNames: {
        color: "black", 
        fontWeight: "500",
        fontSize: 19,
        
    },
    infoCard:{
        flex: 1,
        borderWidth: 5
    },
    cardInfo:{
        fontSize: 18,
        fontWeight: "bold"
    },
    lotTypes: {
        color: "#4169e1",
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
    button2: {
        height: 55,
        paddingTop: 10,
        paddingLeft: 20,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
        backgroundColor: "gold"
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