import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class BannockburnScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> Single and double-occupancy rooms in 8 different floor plans.   
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        {'\u2022'} Bannockburn Suite Prices: $730* 
                        {"\n"}
                        {'\u2022'} Scots Suite Prices: $660* 
                        {"\n"}
                        {'\u2022'} Loft Suite Prices: $700* 
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $1,140* (Single-Occupancy) $570* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} Loft Apartment Prices: $1,280* (Single-Occupancy) $640* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 1 Bath Prices: $730* (Single-Occupancy) $365* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom Deluxe / 1 Bath Prices: $770* (Single-Occupancy) $385* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} Bannockburn Village Prices: $940* 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            I actually liked the room. Very spacious considering I had a roommate. My room was furnished with a fridge and a microwave. Since I shared a bathroom with four ppl, it was never really clean. Same for the kitchen. With the layout I have, it felt a little anti-social. But it had cool amenities too like the computer lab, for printing. And a pretty nice pool for parties. I think it just depends on the extra stuff you bring to it too. It can really help to make it feel like home. Like most apt. There is no light in the room. Invest in some nice floor lamps or other light source. Not as bad as everyone makes it sound. Just dont pair it with a roommate you hate.
                        </Text>
                        <Text style={styles.card}>
                            I've lived in two of the res halls, Bannockburn, and Falkirk. And since Bannockburn is the oldest (of the apts) it comes with the most problems. So I'll give you the bad news first.
                            {"\n\n"}
                            Bad news: when moving in check for any holes in cabinets, floors, under sinks or you might get some animal visitors. That happened in my apt and campus maintenance was quick to help us out. You also might hear your neighbors -- but that happens everywhere.
                            {"\n\n"}
                            Good news: a pool (if that's your thing), getaway cafe, a computer lab/printer to save your life. Closer proximity to campus. I lived in the "suite" and had my own room which was huge and had my own AC.
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
                            The only thing that works for Bannockburn Village is the location. It is right on campus, and close to the Substation and Getaway Cafe. Once you get past that, it is probably living in the worst possible conditions. The resident office staff is great, and the maintenance department is timely, but the problem is the outdated construction. Despite getting pest control done, I kept getting millions of ants in my apartment (and I am one of the cleanest person I know). There is only one window in each room which is way too small to allow enough light in. On top of that the carpets are dark blue, which makes everything more dull. The shower stalls are ridiculously small, and it's impossible to take a decent shower without dropping body wash and shampoo bottles all around. There is no ventilation in the bathroom, and thus despite cleaning every month, I ended up with some mold. I would recommend Bannockburn only to those who want the convenience of location and want to save money while living alone. I have heard rumors that the place is going to be knocked down some day in order to prepare new apartments. Considering the condition of the apartments currently, I think that is the right way to go.
                        </Text>
                        <Text style={styles.card}>
                            If you need a place to live and save money then this is a place for you. The current price is $460 a month which you can always share it with another person for half price. The room is big enough for two people especially the Scott suit. I've been living here for almost two years and I still think this place is very decent and livable. The water/utilities are free. I live with my roommate and we each paid only $230 a month which is REALLLY cheap. You can't find any place that is right next to campus at this price.
                        </Text>
                        <Text style={styles.card}>
                            Pro's:
                            {"\n\n"}
                            1)they were super affordable, everything comes included (except internet)
                            {"\n\n"}
                            2)distance to campus, I could be anywhere on campus in less than 10 mins
                            {"\n\n"}
                            3)I liked how rent would come out on growl, made budgeting for rent easier
                            {"\n\n"}
                            con's:
                            {"\n\n"}
                            1)they are old so if you like nice things you might have to reconsider
                            {"\n\n"}
                            2)thin-ish walls but for me it was never an issue
                            {"\n\n"}
                            3)you will still have an RA, they don't do much but you'll still treated as a student so no parties there...etc
                            {"\n\n"}
                            I lived there for 3 years (2012-2015) and it was comfortable, affordable, and convenient. I'm not too high maintenance so some of the older things about the buildings didn't mind me. Also, I got free summers for releasing from one year to another.
                        </Text>
                        <Text style={styles.card}>
                            This coming year (4th year) will be my 3rd year living in bannockburn.
                            {"\n\n"}
                            Walls are thin, looks kinda old, not the most high tech but pricewise and proximity to campus I cannot complain. If you aren't picky, then I'd definitely recommend it.
                            {"\n\n"}
                            Also, free summers!
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