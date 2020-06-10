import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class BerkdaleScreen extends React.Component{
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
                        {'\u2022'} Studio / 1 Bath Prices: $1,320* 
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $1,310*
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices (+129 sq ft): $1,389-1,404*
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 1 Bath Prices: $1,550-1,625*
                        {"\n"}
                        {'\u2022'} 3 Bedroom / 2 Bath Prices: $2,110* 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            Update...
                            {"\n\n"}
                            GOT MY MONEY BACK. Michelle never contacted me like she claimed.
                            So I tracked the lawyers, the apartments etc. And found the corporation that runs this and other properties. Then contacted them. They did not want to be contacted. lol. I informed them of michelle's racist and ignorant ways. Also informed them of what proof I had etc. Mentioned that I was not looking to sue. And I just wanted my money back and for them to do something about her. I also mentioned the numerous amounts of people complaining and coming to me on similar issues. One particular thing is IT'S PROCEDURE FOR THE MANAGER TO TALK TO CLIENTS AND REFERENCES.
                            {"\n\n"}
                            Michelle got a call from her boss's boss. And I got my money back. Like the execs promise.
                            {"\n\n"}
                            See Michelle. Color folk are smart too, maybe treat people with respect.
                            {"\n\n"}
                            Oh and I found a two room for the same amount as their jr.
                        </Text>
                        <Text style={styles.card}>
                            Oh. My. God. So me and my boyfriend have been searching for a place for a few weeks now but the leasing agents we have dealt with have been nothing close to helpful and hardly want to answer any of our questions. BUT ROSALIE. THANK YOU. We went today to see viewings on the place & sat down with Rosalie for almost an hour asking questions and she was so helpful! She had such a great personality and looked like she was very eager to work worth us. She sold us! We're putting our application in tomorrow! Wish us luck! Thank you Rosalie for being so great!!
                            {"\n\n"}
                            And also of course. The apartments are GORGEOUS & there's so much green! The pool has just been renovated and it looks gorgeous. Hopefully this becomes our new home. Thank you!
                        </Text>
                        <Text style={styles.card}>
                            I come home from work to find that not only has Michelle N manager of Berkdale Apartments, has not contacted me, but she decided to have their lawyer contact me in a letter. A move of intimidation. Especially with the 3000 names on it. Too bad the ratings on them is horrible. And I see why.
                            {"\n\n"}
                            I was going to let this go, but now I want them to take me to court. Because there's a ton of holes in this. I'd say what it is but I'll save that for court. Oh god I got proof too.
                            {"\n\n"}
                            I can imagine what happens to the people who live here.
                            {"\n\n"}
                            At no point has this manager ever did anything she said she was going to do. People do not deserve this type of treatment. And I'm going to fight back.
                        </Text>
                        <Text style={styles.card}>
                            Not only did they not contact me they're keeping $145 that they took from me. $45 for the app/admin fee. (which I did on their ipad) and the 100 for whatever hold for their apt.
                            {"\n\n"}
                            Keep in mind they probably do this to multiple people. And I asked them to refund my money over the phone and they said they would. I was also ghosted after I sent the pic.
                            {"\n\n"}
                            This is how they really are. Guess I'll be talking to lawyers after work today
                        </Text>
                        <Text style={styles.card}>
                            Like many others, I wouldn't recommend that you live in these apartments. There were many bugs and pests, homeless people in the gated community, and ongoing construction. The management is nice when you apply and live here, but when you move out, they find absurd and unlawful ways of deducting your security deposit. KNOW. YOUR. TENANT. RIGHTS! Due to Berkdale being close to many colleges and universities in Riverside, the leasing office do not think that the student renters know the rights they have and they will scam you! I saw that I only got back 1/4 of my deposit when 1) it was left as clean as when I moved in and 2) there was no damage that occurred in the unit besides normal wear and tear. I emailed them, after moving out, regarding some charges they made to my security deposit, and they told me that a "cleaning fee" and "paint retouch charge" was "standard" for residents when they move out. There was NO WHERE in the leasing contract, lease renewal, or move out contract that stated that these charges are standard, except that they will charge our deposit to "clean the premises, if necessary, upon termination of the tenancy in order to return the unit to the same level of cleanliness it was in at the inception of the tenancy." Again, I cleaned the apartment, mopped, etc. to make sure it was as clean as how I first moved in. Please, for anyone who decides to live here, be sure to take pictures of before you move in and after you move out to ensure they won't scam you, and read the CA Civil code 1950.5 to make sure that the reasons they deduct from your deposit are lawful.
                        </Text>
                        <Text style={styles.card}>
                            If I could give zero stars I would. DO NOT LIVE HERE. They will scam you and take your money and come up with ridiculous reasons for taking your deposit. The complex is infested with cockroaches and pests and there is mold on the windowsill! After numerous complaints, they decided to fix that problem by painting over it (which solved nothing). Staff is incredibly nice at first but after you sign the lease, they toss you to the side. Do not live here if you want your security deposit back. They will try to scam you as much as possible so if you do live here, be extremely wary and double check everything.
                        </Text>
                        <Text style={styles.card}>
                            I literally loved living here. Staff is insanely kind and helpful. The best part was how quick the maintenance crew was. Anytime I wanted my air filter changed or a light bulb went out, they would come and fix things. I also was living alone so the area can seem a bit unsafe at night with the homeless people around the area but living there for 3 years, I never had any problems. If you're looking for affordable, this is the best place. It's right by the freeway and a ton of places to eat, 24 hour Starbucks next door too. I can't thank the staff enough there, I honestly am grateful I got to experience living on my own at a wonderful place, they have also renovated and painted them so they look great.
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