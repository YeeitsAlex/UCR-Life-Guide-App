import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class ThePlazaScreen extends React.Component{
    state={
        screenHeight: 0,
    }
    onContentSizeChange = (contentWidth, contentHeight) =>{
        this.setState({screenHeight: contentHeight});
    }
    render(){
        LayoutAnimation.easeInEaseOut();
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}> Information</Text>
                    <View style={styles.cardInfo}>
                        <Text style>
                            {"\n"}
                            <Text style={styles.importantText}>Description: </Text> Single-occupancy and double-occupancy room in 3 different floor plans. 
                            {"\n"}
                            Only allowed for: continuing students, transfer students, and graduate students
                            {"\n"}
                            Not allowed: incoming freshman, students with family
                            {"\n"}
                            {'\u2022'} 1 Bedroom / 1 Bath Prices: $1,230* (Single-Occupancy) $615* (Double-Occupancy) 
                            {"\n"}
                            {'\u2022'} 2 Bedroom / 1 1/4 Bath Prices: $800* (Single-Occupancy) $400* (Double-Occupancy) 
                            {"\n"}
                            {'\u2022'} 2 Bedroom / 2 Bath Prices: $880* (Single-Occupancy) $440* (Double-Occupancy) 
                            {"\n"}
                            <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                            {"\n"}
                        </Text> 
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            I currently live in the Plaza apartments, double occupancy, 1 bedroom. You'll get 3 physical keys: 1 to your apartment door, 1 for the front gate/pool/laundry sections, and 1 for your mailbox. I'll post pictures of my apartment later, when I decide to clean it lol.
                            {"\n\n"}
                            Overall it's a nice place. Utilities aren't extremely expensive, pool is nice and it's only a 5-8 minute walk from campus.
                        </Text>
                        <Text style={styles.card}>
                            About 5 minutes walk away from campus if you take the shortcut from Bannockburn. A little pricy for a single room, shared with 2 other roommates. Maintenance is alright, they usually deal with the work order within 2 days, but the problem isn't guaranteed fixed. We had a leaky faucet in the kitchen, and maintenance fixed it for a while, but then it came back after a few weeks. Water runs well, hot water usually comes on within a minute. However, the water in the sink is white for some reason. The kitchen is a little cramped, since usually 2-4 people share it. Maximum of two people can use the kitchen at a time, and the fridge space and kitchen cabinet space is limited. Mailboxes are a little complicated to get to, since I had to ask the RSO where they were. Swimming pool is a little small and dirty even though the staff cleans it daily (could be the residue that it accumulates over the day), but UCR has their own swimming pool too. Internet isn't covered, so you have to get your own router and set it up and pay for it monthly (it isn't billed to your Growl account). Other than that, great area, gated community, safer than the other campus apartments.
                        </Text>
                        <Text style={styles.card}>
                            my roommate and i just pay $50 a month together for wifi
                            {"\n\n"}
                            Overall, pretty chill experience. I liked the pool and the study rooms. 
                        </Text>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d1d1d1",
    },
    cardInfo: {
        fontSize: 18,
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        margin: 10,
        borderRadius: 5,
        paddingLeft: 15,
    },
    header: {
        backgroundColor: '#4169e1',
        fontSize: 20,
        color: '#FFF',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        borderRadius: 7,
    },
    card: {
        padding: 15,
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        margin: 10,
        borderRadius: 5,
    },
})