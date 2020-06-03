import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, FlatList} from 'react-native'
import firebase from 'firebase'
import {Ionicons} from '@expo/vector-icons'
import moment from 'moment'
import Fire from "../Fire"
// import { FlatList } from 'react-native-gesture-handler';

// const firebase = require('firebase');
require("firebase/firestore");

//temp posts
const posts = [
    {
        id: "1",
        name: "John Doe",
        text: "Hello there",
        timestamp: "Tue Jun 02 2020 14:27:32 GMT-0700 (PDT)",
    },
    {
        id: "2",
        name: "Jane Doe",
        text: "It's hot",
        timestamp: "1590794172334"
    },
];

export default class QuestionAnswerScreen extends React.Component{
    renderPost = post => {
        return(
            <View style={styles.postItem}>
                <Image source = {require("../assets/question.png")} style={styles.question}></Image>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
                        <View>
                            <Text style={styles.names}>{post.name}</Text>
                            {/* <Text style={styles.timestamp}>{moment(post.timestamp).toDate()}</Text> */}
                            <Text style={styles.timestamp}>{(post.timestamp)}</Text>
                            <Text style={styles.postText}>{post.text}</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-end", right: 15}}>
                        <Ionicons name="ios-chatboxes" size={26} color="#73788B"></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Q&A Forum</Text>                
                </View>
                
                <Text style={styles.listHeader}>Frequently Asked Questions</Text>
                <FlatList 
                    style={styles.postsList} 
                    data={posts} 
                    renderItem={({item})=> this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}    
                />

                <Text style={styles.listHeader}>Recent Questions</Text>
                <FlatList 
                    style={styles.postsList} 
                    data={posts} 
                    renderItem={({item})=> this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}    
                />

            </View>
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
    title: {
        fontSize: 20,
        fontWeight: "500"
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
        marginRight: 16
    }
})