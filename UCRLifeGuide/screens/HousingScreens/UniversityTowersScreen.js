import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class UniversityTowersScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> 4 different floor plans. 
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $1,400* , $1,480* (Large)
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices: $1,010* , $1,015* (Large)
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2.5 Bath Prices: $1,020* , $640* (2 per Room)
                        {"\n"}
                        {'\u2022'} 3 Bedroom / 3 Bath Prices: $900* , $910* (Large) 
                        {"\n"}
                        {'\u2022'} 4 Bedroom / 3 Bath Prices: $785* (Shared bathroom), $840* (Private) 
                        {"\n"}
                        {'\u2022'} 4 Bedroom / 4 Bath Prices: $600* (2 per room) , $775* 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            I lived here for three years and I have seen improvements since I moved in but the facilities and rooms felt old. They renovated some apartments but didn't renovate others. The dishwashers barely worked and sink was extremely shallow and annoying to wash dishes in. No tv for the furnished place. Utilizes were included and it was mostly furnished except for a tv.
                            {"\n\n"}
                            Pros: has amenities, some apartments are more renovated so you'll be lucky if you get one of those, close to Ucr and university village with a lot of restaurants and movie theatre
                            Cons: amenities are too old
                        </Text>
                        <Text style={styles.card}>
                            About 3-4 years ago they came in University of California Riverside collecting email addresses for a raffle. They've sent me constant marketing emails since. And even after I have specifically requested to "Unsubscribe" and have long gone graduated from UCR, they continue to violate email spam laws established in North America.
                        </Text>
                        <Text style={styles.card}>
                            They gave me the wrong apartment then tried to convince me that a 4 bed 4 bath is a 4 bed 3 bath. I talked to a staff member at the office and she apparently didn't understand english at a basic level. On my lease paper, it says in bold 4bed/4bath and she kept telling me it meant a room and a bathroom. In other words, I had to deal with an incompetent staff member who lacked a brain to get nowhere. CHOOSE SOME OTHER PLACE TO RENT.
                        </Text>
                        <Text style={styles.card}>
                            So most of these complaints are coming from students fresh from their parent's homes and expecting the top notch luxury they are accustomed to. These are student apartments people. You're expected to get a bedroom, bathroom, living room and kitchen. People complaining that their roommate leaves trash everywhere and doesn't do dishes is beyond ridiculous.
                            {"\n\n"}
                            Tim (manager) has been very professional and kind to me every time I called, stopped by or emailed for something.
                            {"\n\n"}
                            Complaints that they don't take cash? If you're mad at a leasing office for not taking cash, you should still be living at home. You can always pay with a money order for no additional fee.
                            {"\n\n"}
                            Maintenance has always been responsive and helped with issues we were having or provided a time frame that they would be there to fix it. The occasional washing machine or dryer won't work but if you tell the leasing office, they'll let you switch your stuff to another machine and they'll pay for your load to get done!
                        </Text>
                        <Text style={styles.card}>
                            Not safe. I am currently living in a first floor apartment on the street with 4 other girls and have legitimately been scared for my safety in my own room. On many, many occasions I have heard people screaming, shouting, and scratching against my window at night. There is no security here. Regardless of what they say, management could not care less than they do now. I didn't see "security" until my 5th month of living here, and all he does is watch people park. Gates were busted for nearly 2 months, allowing anyone into the complex. I have made 3 different work orders regarding the leaking fridge and fire alarms that management was "checking" and failed to ever quiet. They chirped until I pulled them out of the walls and went to management. The woman in the front said I'd be put down as priority the next day for the handymen, but 3 weeks later they're still not fixed. This place is disgusting. I am easily paying $300 more a month than I should. Super excited for them to try to charge me for broken appliances they refused to acknowledge in the first place. Literally any other complex in Riverside is safer than this one. If you go to UCR, just live in student housing.
                        </Text>
                        <Text style={styles.card}>
                            I haven't even began to live here and I already dislike it. I called today to discuss where I stood with my housing because my roommates who I was suppose to live with in the fall already got emails about their housing and key information and I hadn't. The girl that answered informed me that because I put MYSELF as the guarantor (which I DID NOT. I put my father and I have the emails to prove it.) my application was "incomplete" and i didn't have a room. They failed to inform me that I no longer had a room and she just kept saying "we tried calling you" when I'm positive they only tried two days then gave up. Emails exist? Y'all couldn't email me about this stuff?!?!? You couldn't email me about how to change my guarantor or that I had "x" amount of days to get back to them before they gave my room to someone else??? I LITERALLY HAD NO IDEA I DIDNT HAVE A ROOM UNTIL I CALLED. EMAILS EXIST. I will be going in person in the next few days to talk to the manager. If I still do not a have the room TO WHICH I ALREADY PAID FOR AND SIGNED THE LEASE, I want my money back. I'm frustrated that no warning emails OR calls were sent to inform me that I would not have a room and am annoyed that the girl who answered sounded like she was annoyed at my questions. If you don't want to answer calls/questions, quit.
                        </Text>
                        <Text style={styles.card}>
                            Saying this place sucks is an understatement. Would give negative stars if possible. They charge you for stupid shit and rent is increasing. Also they don't accept cash for rent, forcing you to pay online which charges you a convenience fee so you pay more than the rent you agreed to pay. Did not mention this at all.The apartments are dirty and the bathrooms are cramped. Would never recommend this place ever. Stay clear. The maintenance people even come in your room without permission. Find a better apartment. Grand Marc right across is probably better. Again avoid at all costs. Don't make the same mistake I did.
                            {"\n\n"}
                            Update for the past couple of days they have been doing fire alarm testing and it has been so disruptive and annoying. Literally every 5-10 minutes the fire alarm goes off. Never again will I live here once my lease is over I'm gone.
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