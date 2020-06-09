import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class HighlanderHousingScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> Private and shared room in 4 different floor plans. Previously called Sterling 
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students, RCC students 
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        {'\u2022'} Studio Prices: $1299* 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices Standard: $929* (Private) $599* (Shared) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices Premium: $949* (Private)  
                        {"\n"}
                        {'\u2022'} 3 Bedroom / 3 Bath Prices: $979* (Private) 
                        {"\n"}
                        {'\u2022'} 4 Bedroom / 4 Bath Prices Standard: $749* (Private) $449* (Shared) 
                        {"\n"}
                        {'\u2022'} 4 Bedroom / 4 Bath Prices Premium: $979* (Private) 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            I like the place because its near to UCR and the bus stops are easily accesible. The double occupancy rooms are spacey but single rooms are really small compared to the others. The internet is a struggle, it cuts off sometimes
                        </Text>
                        <Text style={styles.card}>
                            So far my experience with the Sterling Highlander apartments has been great. There is great customer service. When I needed help submitting my application I got the help I needed and was very satisfied with the way I was helped. Very friendly service.
                        </Text>
                        <Text style={styles.card}>
                            During the "rush" of incoming students management began to rent out the other units, they came into my sons unit without prior notice. He had not been given a letter or even phone call informing him of their presence in his rental. He and 2 of his friends arrived to find the cleaning team in the unit, they had removed the abandoned property from the former tenants room and threw it into my son's room. There was trash, dirty laundry, rotting food in pots, lamps, a mattress, blankets etc. - all of which is was now on my son's belongings. He was very upset which he communicated that to the cleaning group as he and his friends removed the trash and abandoned property from his room. The cleaning woman was extremely rude and unprofessional with my son and his friends. That evening I received a phone call from Jessica stating that my son had trashed the room, had unapproved roommates and would be getting a 3 day "Notice to Leave" if he did not clean up the mess which their staff had created. This was absolutely fabricated, and I believe it was in an attempt to make my son responsible for their staff's negligence and behavior. I immediately called Jessica back but did not receive an answer. I also sent her an email on August 15th, 2016 addressing these concerns. Also noting that when I moved my son in we had to clean the entire unit as it had not been done before hand. I also raised concerns about safety and privacy as he had not been informed of their presence in his unit. I had spoken with Jessica during my son's lease renewal about this former roommate and his lack of cleanliness and was assured he would be asked to keep his area clean, which was clearly not done. Instead my son had his room trashed. Then in January of 2018, 2 years later, I get a call from a collection company claiming that I owed $5336.14 to Sterling. I was astounded, I had never received a letter, phone call or email in regards to these charges. I called Sterling to ask why I was being charged and why I had never been contacted about these charges as they are now impacting my credit. They stated that they had sent a letter out to the address listed, when I asked them for the address they had sent it to they said "Rodgefield Lane", I live on Ridgefield Lane. Which means this letter obviously would have been returned. I asked why I did not receive a phone call and they said "they had followed protocol and Jessica is no longer here". Meaning I have no one to verify my agreement with and that it would be their word against mine
                        </Text>
                        <Text style={styles.card}>
                            For the price and for college students its decent. Walls are thin and furniture is cheap. Wifi and cable sucks and upgrading options through a provider sucks spectrum is terrible. If you don't mind a lot of parties and dirty college students then lease here
                        </Text>
                        <Text style={styles.card}>
                            The staff is what makes this place worth living. Not only are the staff extremely helpful and understanding of your needs, but the amenities are incredible. The game room consists of two rooms for video games, a tv, foosball, and a pool table. There are three study rooms that are perfect for when your'e too lazy to go to the library to study. There is a computer room with macs, hps, and two printers (only have to provide the paper). The gym is great for the size. It has the basics to working out (although I wish it had much more). The apartment themselves are also great. The cleanliness of the buildings is pretty gross though. Living in a building full of college students really shows
                        </Text>
                        <Text style={styles.card}>
                            The overall experience here is very pleasant. No problems from the staff has ever arisen. I feel like the rooms and living spaces are to my expectations and if I ever need help with something, the staff is there to assist me.
                        </Text>
                        <Text style={styles.card}>
                            Is a really calm place very little parties which is perfect for studying. my roommates are really nice and some with similar majors. Staff is really helpful and keep the building and apartment nice and clean.
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