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
const frequent = [
    {
        id: "1",
        displayName: "Admin",
        text: "Question: \nWhere should I park if I want to work out at the Student Rec Center(SRC)?\n\nAnswer: \nFor students with parking permits, the SRC offers free 1 hour and 30 minute parking.",
        timestamp: "Tue Jun 02 2020 2:27:32PM",
    },
    {
        id: "2",
        displayName: "Admin",
        text: "Question: \nWhat is the best on-campus housing for social life? \n\nAnswer: \nFor incoming 1st year students Aberdeen-Inverness, for 2nd Years and above: Glen Mor without a doubt.",
        timestamp: "Over a year ago"
    },
    {
        id: "3",
        displayName: "Admin",
        text: "Question: \nAre there meal plans available for students who don't live on-campus? \n\nAnswer: \nYes there are meal plans available for roughly $1200 a month, you can use this meal plan to purchase food from on-campus restaurants.",
        timestamp: "Over a year ago",
    },
    {
        id: "4",
        displayName: "Admin",
        text: "Question: \nWhere can I get coffee or tea at school? \n\nAnswer: \nThe closest place to get coffee or tea if you're on-campus is Coffee Bean. There's also a Starbucks on-campus but it more out of the way. The Starbucks is located at the Glen Mor Market, and you can also purchase Coffee and snacks at the multiple Scotty's stores across campus.",
        timestamp: "Tue July 02 2019 12:39:32PM",
    },
    {
        id: "5",
        displayName: "Admin",
        text: "Question: \nIs there anywhere else besides The Hub where I can get food on-campus?? \n\nAnswer: \nYou can get food at the Glen Mor market, there are two food places inside of there. You can also go to the freshman dining halls, specifically their buffets if you really want to eat. Other than that, on Wednesdays there are multiple clubs that set up stalls where they sell food and is always a good option if you want something different.",
        timestamp: "Tue Sept 02 2019 3:39:32PM",
    },
];

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
            postsList.sort((a,b) => a.timestamp > b.timestamp);
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
                    data={frequent} 
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
        color: '#454D65',
        paddingTop: 15
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