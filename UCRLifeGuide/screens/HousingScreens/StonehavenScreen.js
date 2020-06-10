import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, LayoutAnimation, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

const {height} = Dimensions.get('window') 

export default class StonehavenScreen extends React.Component{
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
                        <Text style={styles.importantText}>Description: </Text> Single-occupancy rooms in 2 different floor plans. 
                        {"\n"}
                        Only allowed for: continuing students, transfer students, and graduate students
                        {"\n"}
                        Not allowed: incoming freshman, students with family
                        {"\n"}
                        {'\u2022'} 1 Bedroom / 1 Bath Prices: $1,346* (Single-Occupancy) $673* (Double-Occupancy) 
                        {"\n"}
                        {'\u2022'} 2 Bedroom / 2 Bath Prices: $1,346* (Single-Occupancy) $673* (Double-Occupancy) 
                        {"\n"}
                        <Text style={{fontStyle: "italic", fontSize: 10}}>*Floor plans and rates may vary</Text>
                        {"\n"}
                        </Text>
                        
                    </View>
                <Text style={styles.header}> Reviews </Text>
                <ScrollView onContentSizeChange={this.onContentSizeChange}>
                    <View>
                        <Text style={styles.card}>
                            I lived there my second year and its pretty comfortable. Parking isnt too bad and you can choose to either buy a parking permit to park in the gates or park in the sidewalk. I personally parked on the sidewalk the entire year and there is always space
                        </Text>
                        <Text style={styles.card}>
                            I been at Stonehaven for about 3 years. It's a relatively good place. If your sharing a room it's 620 a month and your own room it's 1240 a month. It's furnished but the coach is meh. There's enough living space to feel comfortable. If there's any issues or repairs needed, the workers there are quick to fix it. It's gated which gives a little piece of mind. The management there are nice and will help you with any issues. The pool area is pretty nice. There are occasional fire alarms set off in the building and it's a bit farther from campus than the other apartments. Hope this gives you some idea.
                        </Text>
                        <Text style={styles.card}>
                            stonehaven is fully furnished. Compared to Glen mor, stonehaven has more space and you get your own bathroom if you choose to to have a single room. Rent is $1240 a month for stonehaven. I personally think stonehaven is better than Glen mor but to each their own. I hate the dorm feeling and hills so I specifically avoided Glen mor.
                        </Text>
                        <Text style={styles.card}>
                            Living at Stonehaven is an experience. For the most part, it's pretty decent. It's about a 15 minute walk from campus and there's also a bus stop right across the street. The whole apartment itself is spacious; however there is little closet space if you share a room. In a double, you get half a closet and 4 drawers, which are underneath the bed. They recently installed wifi so that's an upgrade, but the wifi is really inconsistent. There are multiple days jn a month where wifi is down, which sucks because then you can't do homework. I like the events the RA plans at Stonehaven. They usually give free stuff and it's sort of educational.
                            {"\n\n"}
                            There are so many water shutoffs. You can't flush the toilet, shower, or use the sink. There's no adjustment for the water temperature when you're showering. The knob only turns in one direction. My biggest complaint is the bipolarness of the water temperature. On some days, it's really nice and warm. On bad days, it's freezing cold or steaming hot. Those bad days can last for 3-4 days, so imagine showering in extremely hot or cold water for 4 days straight. It gets so bad that I have to walk to the gym to shower and that gets so annoying.
                            {"\n\n"}
                            The bathroom is probably the dirtiest part. There's a lot of mold and it gets really disgusting. There are also lots of bugs in the apartment. I remember killing 6 small bugs in the kitchen in one day. No matter how much you clean there will always be a slight bug infestation. I really hope Stonehaven does some major renovations with the plumbing system. The maintenance workers are really efficient. One you send a work order in, they fix the problem in a day or two. Stonehaven also increased the rent to $655.
                        </Text>
                        <Text style={styles.card}>
                            TL;DR: BUG INFESTATION, FREQUENT WATER SHUTOFF, NO SECURITY DEPOSIT
                            {"\n\n"}
                            I lived here for two years and while the property is okay, and the maintainence crew is great, there's a few things that made it a collectively awful experience.
                            {"\n\n"}
                            #1: the water pipe down the street constantly bursts which means there's no water for a day for about once a month. Annoying, but not so bad if you're always in class.
                            {"\n\n"}
                            #2: for a few weeks I had been finding little wings in my shower and sink and ignored it, until one day I came home and there were HUNDREDS of some sort of flying maggots (terrifying, right?) in my sink. I called the RSO and guess what they said? Suck it up, it's not an emergency, maintenance is gone. I was traumatized so I stayed somewhere else for the weekend (this happened on a Friday) then on Monday they finally cleaned it up and I could go back it. I still found little wings around the bathroom for months after. Not only did they handle it terribly but I found out after some of my own investigation that the bugs had COME OUT OF THE WALLS where they had hatched from eggs (?) and were crawling into the sink to find water and subsequently drown or die from thirst. Really cool.
                            {"\n\n"}
                            #3: my roommate had to move out early and return her keys so they had the lock changed. I knew it might happen but I wasnt sure when. Sure enough one day I came home from class and MY OWN KEY DIDN'T OPEN THE FRONT DOOR. I WAS LOCKED OUT OF MY OWN APARTMENT. All because maintenance and management didn't think it was necessary to inform the people who still lived in the apartment that they were changing the locks because the keys were lost. I complained to Housing and I got a written letter apologizing for the inconvenience. Still very unprofessional and honestly, a really stupid mistake on their end.
                            #4: Finally, I didn't get my security deposit back. And neither did a single other person I knew who lived there. Shocker.
                            {"\n\n"}
                            Other than that, I must say that the RA's were AWESOME and handled things really well. But I definitely wouldn't recommend someone to live here under any circumstances. For the same amount of money you could get your own master bedroom with a bathroom in a house and not have to pay for parking. Please make Stonehaven your last choice for on campus living.
                        </Text>
                        <Text style={styles.card}>
                            Style: Double occupancy
                            {"\n\n"}
                            Rent: $620 (2017-18), $639 (2018-19)..Not happy about that raise in rent!
                            {"\n\n"}
                            Distance from UCR: Walkable, you can use a scooter or bike to get to campus faster.
                            {"\n\n"}
                            First moved in: The apt is pretty spacious on the inside. The bathroom was moldy(specifically the toilet)...yuck! The desk chair....hmm...well it was one of those cafeteria plastic chairs.  I noticed the walls were pretty thin. The kitchen is one of my favorite features of the apartment. It is pretty nice. It has a raised bar design. One thing that really irked me was the fact that there was no wifi and you had to use the Ethernet adapter...a really big pain in the butt.  
                            {"\n\n"}
                            Outside of the apartment:
                            The lobby is quite nice, it has a hotel feel to it. The lobby is where you will pick up packages, find your mail in the mailboxes, and sometimes there are mini snacks you can grab in the morning.
                            It can get a little dark at night because half of the lights are usually off. So if you want to feel really safe, this is not the place you're looking for.  
                            The pool area is nice. There are restrooms where you can clean off. I recommend it if you want to take a break for work.
                            The office workers are really kind. They try their best to address your issues.
                            There is a resident adviser per 2 buildings (?) I might be wrong. You can also talk to them if you have any problems.
                            {"\n\n"}
                            After a year of living there: I would say it is not too bad. I don't want to pay for parking in UCR so i opted to live in this aptment. The distance is totally doable. If you take night classes, the escort system can take you here. They did repaint everything before the new school year..not sure if that's an every year thing. Interior-wise, I recommend it if you're a chill-at-home type of person and if you like house chores. This place requires some maintenance because it can get dirty after a while.
                            {"\n\n"}
                            Would I live here again? Mmm, yes for the time being because it's reasonable close, but if they continue to raise the price...I rather not. You can live somewhere nicer with the amount you pay. But you do save gas and utility fee.
                        </Text>
                        <Text style={styles.card}>
                            I lived at Stonehaven Apartments for two years.  During the time being, I never encountered any issues with the management or maintenance team.  My repair orders were always taken care of within a reasonable time- one or two days, unless it was something more urgent; in that case, the issue was responded to almost immediately.  The Stonehaven premises are always kept nicely gardened and are safe/quiet.  I did not have a roommate and even then, safety was never an issue.  Although the management crew was very nice and respectful, I chose to live somewhere else this year.  Stonehaven is a bit pricy considering that it is one of UCR's student housing options and it does come fully furnished.  Also, utilities and free internet/cable are included, which is appreciated. P.S. the pool area is so beautiful at Stonehaven! New chairs and cabanas.
                            {"\n\n"}
                            Cons: parking is expensive. :(
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