import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class GlenMorScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> Single-occupancy rooms in two- and four-bedroom floors. 
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        Prices: $1,210* 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>   
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            My experience from Glen Mor...
                            {"\n\n"}
                            Pros - its the newest facility for on campus housing. It was completed 2 years ago, and the facilities are generally nice.
                            {"\n\n"}
                            Glen Mor Market - Its has people, a starbucks, a convenience store, grille and late hours. I don't know when it closes, but I have been there at late hours stocking up on snacks before I head to the computer labs for my all nighters.
                            {"\n\n"}
                            Cons:
                            {"\n\n"}
                            Price - Glen mor is the most expensive option as well. What you pay for a quarter at glen mor is what you can pay for 6 month to 18 month leases else where. At the market food is priced at the school rate, so it will be hike compared to stores around the school.
                            {"\n\n"}
                            Space: Glen mor is small. For your money you could get a larger space and a lower cost. Your space requirements vary depending on how well you gel with room mates, and the size for your personal bubble.
                            {"\n\n"}
                            Location: Unless you have a car, Glen mor isn't particularly close to anything, aside from the organic food store. It's also a walk to the rec center. not a big deal, but a minor annoyance on some days.
                            {"\n\n"}
                            Social Interaction:
                            {"\n\n"}
                            Mixed bag, some people only interact with roommates, some people with hall mates. Depends on your own life. For me, I lived at school via clubs, job and library so I never interacted with my roommates. I did Chemical Engineering though, so my course work is more time intensive than other majors.
                            {"\n\n"}
                            My two cents: Glen more is a premium introduction to living on your own. It has what you need, so you don't have to think about most stuff. However, it does come at a price.
                            {"\n\n"}
                            Once you're used to UCR and the Riverside lifestyle, you'll probably find yourself moving out, either saving money, getting a larger space, or living by yourself.
                        </Text>
                        <Text style={styles.card}>
                            The biggest con to Glen-Mor is the cost. Not only the cost, but the amount of space you get for that cost.
                            {"\n\n"}
                            I live in a house down Blaine, in a room (not shared) that's probably 3/4 the size of the kitchen & living room area, combined, of a Glen-Mor apartment. A years worth of rent at my place is roughly equivalent to a quarters worth of rent at Glen-Mor.
                            {"\n\n"}
                            The facilities are quite nice, you're right next to campus and places like the market and Starbucks, and you have exposure to more people. Those are the pros.
                        </Text>
                        <Text style={styles.card}>
                            Hey there, I never lived in on campus apartments, but I did live in Glen Mor 2 for a year.
                            {"\n\n"}
                            Definitely avoid Glen Mor. It is overpriced and your utilities expenses will not be equivalent to the price difference.
                            {"\n\n"}
                            A good idea is how many people return or stay in their apartments, of everyone I knew staying there (~30ish people) only 2 stayed for a second year and that's because they have full rides so money isn't a concern. In comparison a bunch of people I know are staying in the other traditional on campus apartments for their 2nd or even 3rd years and a good portion of the ones who left Glen Mor switched to these apartments afterwards.
                            {"\n\n"}
                            Biggest complaints: Smoke alarms went off weekly, bathroom toilet didn't get fixed for days, internet went out frequently (once for a full day during finals week) and always had a dramatically varying ping (if you're into gaming), and the rooms are very narrow and can be cramped.
                        </Text>
                        <Text style={styles.card}>
                            Dont forget, with Glen Mor, you also get $400 a quarter for on-campus food, as well as cleaning services bi-weekly which cleans bathrooms and floors. Its also very close to campus making travel time almost non-existent. You do pay a lot but you do get what you pay for to an extent. I put in a work order once and they came the same night to fixed it, was a clogged drain.
                            {"\n\n"}
                            I will say the worst part about living here is the fire alarms, they happen at least once a quarter for a test, but you can throw some headphones in and take a jacket, but they're still very annoying.
                        </Text>
                        <Text style={styles.card}>
                            This is probably the freshet housing option on campus aside from East Lothian. All of the furniture and buildings are pretty new, and the accommodations and spaces are amazing. These are apartment style so each of your roommates gets a single room and there is a common space for every 4 single rooms. The apartment spaces come furnished with a few pieces of furniture, but you will need to provide things like a television or anything related to media.
                            {"\n\n"}
                            Glen Mor also requires that you have a meal plan, but that is more flexible than the first year plan. You can get a meal plan that exclusively has $400 dining dollars, or you can get another balance of dining dollars and meal swipes.
                            {"\n\n"}
                            Glen Mor is also the most expensive of all of the on campus apartments - in total it comes at a similar price to living in a residence hall. However, the accommodations provided compensate for that price difference, as well as the proximity to campus.
                        </Text>
                        <Text style={styles.card}>
                            If you prefer to live in a college dorm with no smoking, skip UC Riverside.
                            {"\n\n"}
                            UC Riverside is a smoke free campus - that's no smoking on campus and in the dorms. But this law is not enforced at all. In fact, it's a joke!
                            {"\n\n"}
                            Turns out that if you don't want your roommate to smoke in a "smoke free" dorm - YOU have to move to another place. UCR responds by offering the smoker a program to quit smoking and then looks the other way.
                            {"\n\n"}
                            All the dorms are smoke free.Yet this week, 3 roommates are moving out of their smoke free Glen Mor apartment because the housing admin is unable to move a fourth roommate who smokes (pot and cigarettes), and drinks in the apartment. Even after the smoker is asked to comply they continue to smoke. And then cover it up with lemon air freshener.
                            {"\n\n"}
                            You'd think this would be a simple issue: break the contract rules of the dorm (and the campus), get a warning and if you don't comply after complaints are filed you are moved from the dorm. Not true.
                        </Text>
                        <Text style={styles.card}>
                            “Old” Glen Mo 1r: Homier Vibe. Amazing Closet. Better lighting options throughout the apartment. The flow of water in the showers is stronger. They have the OG Scotty’s with the bomb smacks (closes late af).
                            {"\n\n"}
                            “New” Glen Mor 2: Hotel Vibe. Wack ass closet: it’s a military style closet. The bed is the same as GM 1, the storage under the bed is different. The room feels bigger since it doesn’t have a built in closet. The kitchen has some cool lighting under the cabinets. Couches feel the same as Glen Mor 1. Closer to the pool and Starbucks.
                            {"\n\n"}
                            I wouldn’t complain in either or. Glen Mor over all is amazing. Nicest housing options and it’s privately located away from the public.
                            {"\n\n"}
                            We also have the Glen Mor market we’re pretty much spoiled af in GM.
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