import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CustomerAboutUs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image style={styles.img} source={require('../assets/txtl.png')} />

                <Image style={styles.ease}
                    source={require('../assets/ease.png')}
                />

            </View>

            <View >
                <Text style={{ marginStart: 20, fontSize: 30, marginTop: 20, fontFamily: 'StrickenBrush-D9a3' }}> About Us</Text>

                <Text style={styles.txt}>
                    RoadMech is an automotive servicing application that offers services
                    at the convenience of Customer. Our mobile mechanics are always ready to come and service
                    your car at your desired place. Why wasting time queuing at the workshop when you can reach us anytime of the day. Call your mechanic today and save that time. Our mechanics are all certified to handle the respective brands they specialize on. Try us today and you will call again.

                    Our mechanics are all over to help you.


            </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    img: {
        //backgroundColor:"#667986",
        alignItems: "center",
        marginTop: 15
    },
    txt: {
        fontSize: 21,
        marginHorizontal: 22,
        marginTop: 15,
        // letterSpacing:3



    },
    ease: {
        marginTop: 10
    }

})
export default CustomerAboutUs