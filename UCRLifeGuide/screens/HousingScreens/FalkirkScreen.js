import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class FalkirkScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> Single-occupancy and double-occupancy room in 5 different floor plans. 
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $1,290* (Single-Occupancy) $645* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 1 Bath Prices: $860* (Single-Occupancy) $430* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices: $900* (Single-Occupancy) $450* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom Deluxe / 2 Bath Prices: $930* (Single-Occupancy) $465* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} Studio / 1 Bath (Graduate Students Only) Prices: $1,070* (Single-Occupancy) 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            I lived there for a year and a half. It was OK. I moved there from Oban when it got transitioned to family housing. I wasn't happy about the move because Oban was nicer. But it was overall fine. The bedrooms are nice and spacious, maintenance is usually quick. I had a bug issue that was stubbornly difficult to get under control but Housing was willing to keep sending Terminix over and over again until it was finally resolved.
                            {"\n\n"}
                            It's overpriced but so is all of the on campus housing. Overall, would live there again. Less expensive and not as freshman/dorm-y as Glen Mor, definitely in better condition by far than Bannockburn, and not pink (I'm sorry, I'm comfortable with my masculinity as a gay guy and everything, but it's just hideous) like the Plaza. And Stonehaven is even more overpriced. It's so nice living on campus.
                            {"\n\n"}
                            Happy to answer any specific questions. I lived in a 2/2 deluxe.
                        </Text>
                        <Text style={styles.card}>
                            It has its pros and cons, I guess. I’ll start with the cons.
                            {"\n\n"}
                            I live on the second floor and we have two balconies. When I first saw them, I was really happy. Then, I realized that they were bolted shut and you cannot go out on them. I guess one of the balconies in a unit collapsed in the past. Hence, they bolted all of them shut, which in my opinion, is hella annoying.
                            {"\n\n"}
                            Also, IDK if it is a problem with our unit or everyone is experiencing it but the air conditioner in our unit works only in the living room, not in the bedrooms. It gets cold during winter nights.
                            {"\n\n"}
                            If your room is the one that is closer to the bathroom, you’ll hear the water running every time when someone is in the bathroom.
                            {"\n\n"}
                            I’ll talk about the pros now. The unit is very spacious. The kitchen is really nice with a dishwasher, a fridge and lots of storage space. It is really close to the campus, I always walk there. The police patrols the parking lot and the complex regularly. So, it is not that shady. Maintainance is fast and people who work there are nice. Lastly, we have a nice, relaxing pool area!
                            {"\n\n"}
                            My overall experience is not bad, I’m more than okay with living at Falkirk. I just wanted to let you know before you decide. And if the air conditioner problem is not specific to our unit, I recommend you to get a heater before the winter comes. Hope this helps!
                        </Text>
                        <Text style={styles.card}>
                            My roommate and I got a bunk bed, which cleared up more than enough space for several desks/TV/walking area. The rooms are pretty small, but that's expected.
                            {"\n\n"}
                            The other room had individual beds, and barely any walking room.
                        </Text>
                        <Text style={styles.card}>
                            I liked living here. I lived here with my roommate for three years (2012-2015) and the only problem we had was when the pipes burst underneath our apartment and so then Campus Housing accommodated our stay to the Glenn Moore Apartments which was pretty cool.
                            {"\n\n"}
                            The building that I was located in was the G building and I had clear access/view to the laundromat so I never had any experience with weirdos stealing my clothes (thank goodness). My room was a single and decided to share it out with someone else, but there are apartments that have two rooms (I think). Also when I moved in they had installed new carpets.
                            {"\n\n"}
                            Pros:
                            {"\n"}
                            +there is a pool with a jacuzzi area
                            {"\n"}
                            +the pool area also provided little events by the Falkirk Housing staff to meet the other residents and occasionally gave pizza (which was pretty nice when you dont want to cook)
                            {"\n"}
                            +ample space (in the single) for both the living room and bedroom.
                            {"\n"}
                            +two sinks
                            {"\n"}
                            +toilet and shower/tub are in a small room in itself so you still have access to the sink/mirror
                            {"\n"}
                            +pretty quiet against the other units. I  never saw/heard any of the other residents when I lived there so good quiet hours for studying/sleeping
                            {"\n"}
                            +good walking distance to the Rec Center/campus
                            {"\n"}
                            +the unit originally had an old air conditioning system which had to be replaced with a newer one and kept the place pretty cool
                            {"\n"}
                            +if you decide to renew your lease for the next year you got the summer rent free but had to pay for the utilites
                            {"\n"}
                            +your utilites are included but will charge you if you go over the limit
                            {"\n"}
                            +basic cable
                            {"\n"}
                            +housing management will come in the late hours if you have a serious housing issue (like when the water pipes burst)
                            {"\n"}
                            +the single had two closets
                            {"\n\n"}
                            Cons
                            {"\n"}
                            -you need to set up your own internet (I think Glen Moore comes with internet access)
                            {"\n"}
                            -restroom is kind of cramped
                            {"\n"}
                            -i had the bottom floor and therefore had lots of crickets visit me
                            {"\n"}
                            -the unit I had had an old fridge and an old electric stove that took ages to cook stuff and left a nasty irony smell
                            {"\n"}
                            -not furnished besides the fridge and stove so buy your own furniture
                            {"\n"}
                            -laundromat washing machines feel like they don't really clean your clothes
                            {"\n"}
                            -because you have to cook for yourself, your access to super markets is kind of far (both Stater Bros and Food 4 Less)
                            {"\n"}
                            -Canyon Crest is kind of sketchy in itself that it seems like there is always a burglary/attack happening every week.
                            {"\n\n"}
                            Other than that I had a good experience here. Wish I could reside here once more.
                        </Text>
                        <Text style={styles.card}>
                            This is my honest review of the Falkirk Apartments to give you an idea of what it is really like to live here.
                            {"\n\n"}
                            Pros:{"\n"}
                            -if you get your own room w/o splitting or sharing w/ another, then they are spacious and more than sufficient for one person{"\n"}
                            -the shower/wash area work really well{"\n"}
                            -the kitchen area has lots of cabinets and counter space to store your bits and goodies{"\n"}
                            -the living room and dining room areas have ample space{"\n"}
                            -housing staff typically respond in a reasonable and timely manner (there are exceptions on occasions when they take more than 2 days to respond in person){"\n"}
                            -very convenient walking distance to the Rec Center and campus{"\n"}
                            -rooms are not 100% soundproof but do a decent job cutting out outside noise (helpful during midterm and final seasons or when you want to sleep quietly){"\n"}
                            -plenty of hallway storage space (cabinets and slide out closets)
                            {"\n\n"}
                            Cons:
                            -air conditioning units have a minor sensor glitch during hot seasons{"\n"}
                            -master bedroom (one with personal balcony) tends to heat up quickly during hot seasons and stay really cold during cold seasons (modest insulation issues){"\n"}
                            -shower heads have a weak stream while showering{"\n"}
                            -personal Internet plans are not included in the monthly rent payments{"\n"}
                            {"\n\n"}
                            Overall, if you are a student transitioning out of the dorms these apartments are a welcome change to the expanded space you will have to yourself and flexibility of how much you can personalize the shared and private spaces to your own liking. Also, the extremely close walking distance to campus are hard to beat at a modest monthly price.
                        </Text>
                        <Text style={styles.card}>
                            I moved here as a transfer student in 2017 and shared a room. Yes the rent is cheap and it is very close to campus, but in my opinion it was not worth it at all. The outside and inside of the apartments are dirty and outdated. I had several issues with roaches while living here. I was told that the bugs were in the pipes so there was really nothing they could do about it. The room had windows and a patio that could not be open so I was unable to get fresh air. There was an incident where a bee was stuck in my room and because the windows could not open, it was hell getting rid of it. Maintenance was great and always quickly responded to requests, but honestly this place needs to be torn down. I dreaded coming home to this place everyday. Do yourself a favor and find somewhere else to live.
                        </Text>
                        <Text style={styles.card}>
                            Current Falkirk resident and former Oban resident before the switchover. I really liked Oban and felt I was paying a little much but I was a happy resident. Then they made that family housing and moved me to Falkirk. This place is crap. Insulation is crap, not nearly as much storage space, everything is falling apart, and major pest issues (I'm talking like roaches and silverfish, not just spiders and ants, although we've got those too). It could just be me but I kinda doubt it.
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