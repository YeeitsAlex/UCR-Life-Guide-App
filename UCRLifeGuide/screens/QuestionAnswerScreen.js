import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, FlatList, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'
import {Ionicons} from '@expo/vector-icons'
import moment from 'moment'
import Fire from "../Fire"

// const firebase = require('firebase');
require("firebase/firestore");

//temp posts
// let posts = []
// const posts = [
//     {
//         id: "1",
//         name: "John Doe",
//         text: "Hello there",
//         timestamp: "Tue Jun 02 2020 14:27:32 GMT-0700 (PDT)",
//     },
//     {
//         id: "2",
//         name: "Jane Doe",
//         text: "It's hot",
//         timestamp: "1590794172334"
//     },
// ];

export default class QuestionAnswerScreen extends React.Component{
    state = {
        posts: [],
        // data: {},
    };

    componentDidMount(){
        this.getFeed();
    }

    // checkAnon = () => {
    //     if(post.displayName){
    //         return (<Text style={styles.names}>{"Anonymouse"}</Text>)
    //     }
    // }

    getFeed = async () =>{
        let ref = Fire.shared.collection.orderBy('timestamp');
        try{
            const querySnapshot = await ref.get();
            const postsList = [];
            querySnapshot.forEach(function(doc){
                if(doc.exists){
                    const postData = doc.data();
                    // console.log(doc.data());
                    const userName = postData.displayName;
                    // console.log(userName);
                    const userText = postData.text;
                    // console.log(userText);
                    const postTimeStamp = postData.timestamp;
                    // console.log(postTimeStamp);
                    // console.log(user);
                    const tempPostArray = {
                        id: doc.id,
                        displayName: userName,
                        text: userText,
                        timestamp: postTimeStamp
                    };
                    // console.log("Trying to push");
                    postsList.push(tempPostArray);
                    // console.log(postsList);
                    // console.log("push successful");
                }
            });
            // console.log(postsList)
            postsList.sort((a,b) => a.timestamp < b.timestamp);
            this.setState({posts: postsList})
            //return postsList;
        } catch({message}){
            alert(message);
        }
    };

    renderPost = post => {
        return(
            <View style={styles.postItem}>
                <Image source = {require("../assets/question.png")} style={styles.question}></Image>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
                        <View>
                            <Text style={styles.names}>{post.displayName}</Text>
                            {/* <Text style={styles.timestamp}>{moment(post.timestamp).toDate()}</Text> */}
                            <Text style={styles.timestamp}>{(post.timestamp)}</Text>
                            <Text style={styles.postText}>{post.text}</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-end", right: 15, paddingTop: 5}}>
                        <Ionicons name="ios-chatboxes" size={26} color="#73788B"></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.headers}>
                    <TouchableOpacity onPress= {this.getFeed}>
                        <Ionicons name="md-refresh" size={35} color="black"></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.title}>Q&A Forum</Text>                
                </View>
                
                <Text style={styles.listHeader}>Frequently Asked Questions</Text>
                <FlatList 
                    style={styles.postsList}
                    data={this.state.posts} 
                    renderItem={({item})=> this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}    
                />

                <Text style={styles.listHeader}>Recent Questions</Text>
                <FlatList 
                    style={styles.postsList} 
                    data={this.state.posts} 
                    renderItem={({item})=> this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}    
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5},
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headers: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12, 
        borderBottomWidth: 0.5,
        borderBottomColor: "#D8D9DB",
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        paddingRight: 120,
        paddingTop: 5,
        fontWeight: "bold"
    },
    postsList: {
        marginHorizontal: 16
    },
    postItem: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 0, 
        flexDirection: "row",
        marginVertical: 10,
        // height: 50
    },
    names: {
        fontSize: 15,
        fontWeight: "500", 
        color: '#454D65'
    }, 
    listHeader:{
        backgroundColor: '#4169e1',
        fontSize: 20,
        paddingLeft: 15,
        color: '#FFF',
        paddingTop: 10, 
    },
    timestamp:{
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    postText:{
        marginTop: 16,
        fontSize: 14,
        color: '#838899'
    },
    question:{
        width: 42,
        height: 42,
        borderRadius: 18,
        marginRight: 16,
        marginTop: 22,
        marginLeft: 5
    }
})