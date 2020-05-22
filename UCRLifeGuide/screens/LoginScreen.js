import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, StatusBar, LayoutAnimation} from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    static navigationOptions ={
        // header: null #commented out due to deprication
        headerShown: false 
    };

    state ={
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <ImageBackground style= {styles.imageBackground} source={require("../assets/UCRTower.png")}>
                    <Text style={styles.greeting}>{'Hello!\n Welcome to UCR Life Guide'}</Text>
                </ImageBackground>
                {/* <Text style={styles.greeting}>{'Hello!\n\n Welcome to UCR Life Guide'}</Text> */}

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>} 
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input} 
                            secureTextEntry autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress= {() => this.props.navigation.navigate("Home")}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Enter as a Guest User</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32}} onPress= {() => this.props.navigation.navigate("Register")}>
                    <Text style={{color: "#414959", fontSize: 13}}>
                        New to UCR Life Guide? <Text style={{ fontWeight: "500", color: "#ffd700"}}>Sign Up</Text>
                    </Text>
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
        //Styling to create shadow for text
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 8
        //End text shadow
    },
    errorMessage:{
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: 20,
    },
    error:{
        color: "#ff0000"
    },
    form:{
        marginBottom: 10,
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
        flex: 0.8,
        width: null,
        height: null,
        resizeMode: 'contain',
        opacity: .9,
        marginBottom: -35
    },

})