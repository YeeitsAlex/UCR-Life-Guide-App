import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class GrandMarcScreen extends React.Component{
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
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $870* 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices: $970* 
                        {"\n"}
                        {'\u2022'} 4 Bedroom / 4 Bath Prices: $1070* 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                           rooms quality is hit or miss for both, but grand marcs are bit bigger than UVT, has laundry inside the apartment. Bathrooms will always be inside your room unlike UVT there's a small your bathroom is outside your room (still inside apartment). Lived at 2 different rooms at Grand Marc and had no major issues, outside of kitchen quality. Visited friends at uvt a lot and they had way more problems
                        </Text>
                        <Text style={styles.card}>
                            Living here for the first time and already renewed for next year. I love it here! They treat the renter's really well and always host events for us. They handle packages with ease and also have a 24/7 Amazon Locker to use for all residents. Parking is whatever because the spots are small but there's always a spot somewhere. Repairs usually take a day or two which is pretty good. As long as you have good roommate's that you know, you'll have a great time. Internet is pretty good. We (4 guys) shard the same route and it got slow so I decided to get my own (Google Wifi) and I get around 100 up and 20 down which is crazy fast. Highly recommended it! Let me know if you're interested because I can hook it up!
                        </Text>
                        <Text style={styles.card}>
                            During my time at UCR from 2010-2014, Grandmarc had the reputation of being utter garbage from all of my friends and from everyone else too. It was basically the place where people got wasted and threw non-stop parties and would trash everything and management was just as scummy. They could have changed since those years, but I highly doubt it.
                            {"\n\n"}
                            Ask around, and ask the residents currently living there and be careful and read the fine print for your living agreement.
                        </Text>
                        <Text style={styles.card}>
                            I have lived at GrandMarc for a couple of years and although they have changed Management I found the apartments suit my needs. There are study rooms, a gym , and even a theater for presentations or just to watch a movie. The staff is super nice and their functions are even better. Just renewed my lease and will be here for another couple years.
                        </Text>
                        <Text style={styles.card}>
                            GrandMarc is in the perfect location for TCU students to live here during their time at school. It is walking distance to all academic buildings. The best part about it is the amenities it has. With a gym and its own study rooms you never need to actually leave the building much besides going to class. I would not recommend living here if you are not going to TCU.
                        </Text>
                        <Text style={styles.card}>
                            Has been a great experience. A recent change in management has caused some displeasure on my end specifically. And one employee I find extremely rude.besides that I find all other employees very helping and accommodating. They offer fantastic ammendties just best any other apartment in the area.
                        </Text>
                        <Text style={styles.card}>
                            I hate this community because the management here is out to get you. They will try to weasel their way in getting you to pay more money than you have to. Numerous times I have been given charges over such minor things and it is the worst when you move out. I swear they will conjure up the stupidest excuse/reason over the smallest thing possible and charge you a couple hundred bucks before you are free from this Hell. I feel as if I have been scammed in living here and I regret ever choosing this place. Don't live here if you don't want money to be stolen for you for the most -------- excuses ever.
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