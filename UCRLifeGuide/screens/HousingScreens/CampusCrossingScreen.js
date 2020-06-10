import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class CampusCrossingScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> Single space, Private Rooms and Private Units in 3 different floor plans. 
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices (Junior): $565* (Single Space) $1130* (Private Room)  
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $630* (Single Space) $1260* (Private Room)
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 1 Bath Prices: $440* (Single Space) $880* (Private Room) $1760* (Private Unit) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices: $470* (Single Space) $940* (Private Room) $1880* (Private Unit) 
                        {"\n"}
                        {'\u2022'} 3 Bedroom / 2 Bath Prices: $415* (Single Space) $830* (Private Room) $2490* (Private Unit) 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            These cozy apartment units are definitely close to campus.
                            {"\n\n"}
                            Management responds quickly to concerns.
                            {"\n\n"}
                            Consider purchasing renter insurance to avoid expensive party related damages.
                            {"\n\n"}
                            Be sure to include and clarify all terms, conditions and all concerns in a written legal contract, signed by both parties, to avoid any potential disputes during your lease term.
                        </Text>
                        <Text style={styles.card}>
                            These apartments are so close to the UCR campus that it makes it very convenient to commute back and forth from campus. The apartments themselves are in very good condition, new upgrades and changes have been made which has made my living experience here even better. The management staff has been so helpful in answering all questions and making sure all residents' conflicts and issues are solved. I'd like to especially thank Megna and Brooke for taking the time out of their busy schedule to help me resolve a conflict I was having. Student life is already busy but having helpful staff at the apartment complex has been a huge blessing!
                        </Text>
                        <Text style={styles.card}>
                            Compared to where I lived before across the street these apartments are a lot bigger and cheaper. My other apartments I can just fit like a sofa and coffee table but here I have space for dining table and my desk. I'm graduating from UCR this year and this is my 4th apartment in the area but its the only one I actually renewed at because of how convenient it is. The staff is pretty good, theres usually two people brooke and megna (not sure how to spell it) in the office that are really friendly and helpful even with random stuff about school or where stuff is in riverside. The apartments have had some normal issues that i've had in other apartments before but maintenance has been a lot faster here than in other places and they are actually friendly and say hi when i see them. You can walk to starbucks and the grocery store which works for me cause i dont have a car. The bus stop for UCR is across the street but its a short walk so i usually walk instead of catching the bus. And they do have events and stuff so we'll get free food or stuff.
                        </Text>
                        <Text style={styles.card}>
                            Awesome place to live! All favorite shops and eateries are close by. It's very clean and well maintained. Apartment managers Brooke and Megna are wonderful, helpful and takes care of issues right away. Also have nice events for residents. Definitely recommend these apartments.
                        </Text>
                        <Text style={styles.card}>
                            This place is super close to UCR without those gaudy campus apt prices. The office staff are these two nice, young girls and they are super sweet and understanding of any issues I have. The maintenance crew is pretty punctual and thorough. The apt building itself is a little on the old side which explains the 4 stars. But the entire staff and office coffee/candy are awesome.
                        </Text>
                        <Text style={styles.card}>
                            This is the most disgusting apartment I have ever seen and the management staff is toxic, with so many childish people working here. I'm stuck here for another quarter but please stay away. Please please please avoid this rat hole!
                        </Text>
                        <Text style={styles.card}>
                            THEY JUST WANT YOUR MONEY! Ive paid hundreds for how many times my vehicle has been towed and how many times they didn't accept my rent and for WHAT!!! Their apartments are DISGUSTING there are dead rats and bugs and trash and needles all over the place! It's falling apart and I've never met such inconsiderate disrespectful people in my life, when I say this I'm referring to the management! The bio of this place couldn't be far from the truth come visit and ask anyone that lives here besides the staff and you'll understand the truth about this place. I made the mistake of not doing the research of this place and now I'm stuck but please don't make the same mistake I did!!
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