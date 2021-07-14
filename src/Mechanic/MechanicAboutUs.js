import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const MechanicAboutUs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image style={styles.img} source={require('../assets/txtl.png')} />

                <Image style={styles.ease}
                    source={require('../assets/ease.png')}
                />

            </View>

            <View >
                <Text style={{ marginStart: 40, fontSize: 30, fontFamily: "StrickenBrush-D9a3", marginTop: 10 }}> About Us</Text>

                <Text style={styles.txt}>
                    RoadMechApp is an automotive servicing app that offers services at the convenience of Customer’s home or office. Our mobile mechanics are always ready to come and service your car at your home or office. Why wasting time queuing at the workshop when you can reach us anytime of the day. Call your mechanic today and save that time. Our mechanics are all certified to handle the respective brands they specialize on. Try us today and you will call again.

                    Our mechanics are all over to help you.


            </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    img: {
        //backgroundColor:"#667986",
        alignItems: "center",
        marginTop: 20
    },
    txt: {
        fontSize: 20,
        marginHorizontal: 25,
        marginTop: 15,
        textAlign: "justify",




    },
    ease: {
        marginTop: 10
    }

})
export default MechanicAboutUs