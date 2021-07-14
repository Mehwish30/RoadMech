import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';



const MechanicProfile = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [expertise, setExpertise] = useState('')



    const details = () => {
        var currentUser = auth().currentUser
        database().ref(`Mecahnic`).child(currentUser.uid).on('value', (data) => {
            let name1 = data.child('name').val();
            setName(name1);
            let phone = data.child('phone').val();
            setPhone(phone);
            let email = data.child('email').val();
            setEmail(email)
            let address = data.child('address').val();
            setAddress(address)
            let image = data.child('image').val();
            setImage(image)
            let expertise = data.child('expertise').val();
            setExpertise(expertise)




        })
    }
    useEffect(() => {
        details()
        return () =>
            console.log("warning")
    }, [])


    const signOutUser = async () => {
        try {
            auth().signOut();
            navigation.navigate("Mechaniclogin")
        } catch (e) {
            console.log(e);
        }
    }





    return (



        <View style={styles.container}>

            <View style={styles.imgcontainer}>
                <Image style={styles.img}
                    source={{ uri: image }}
                />
                <Text style={styles.txt}>{name}</Text>

            </View>
            <View style={styles.conabout}>
                <Text style={styles.txtabout}>{expertise}</Text>


            </View>

            <View style={styles.Touchcontainer}>
                <View style={styles.topacity}>
                    <Icon name="phone" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.text}>{phone}</Text>

                </View>
                <View style={styles.topacity}>
                    <Icon name="email" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.text}>{email}</Text>
                </View>
                <View style={styles.topacity}>
                    <ICon name="place" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.text}>{address}</Text>
                </View>
                <TouchableOpacity style={styles.topacitylogout} onPress={() => signOutUser()}>
                    <ICon name="logout" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.textlogou}>LOG OUT</Text>
                </TouchableOpacity>
            </View>

        </View>



    )
}

export default MechanicProfile

const styles = StyleSheet.create({
    imgcontainer: {
        borderRadius: 28,
        height: "27%",
        // marginTop:4,
        alignItems: "center",



    },
    img: {
        width: "50%",
        height: "90%",
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",


    },
    container: {
        flex: 1,
        backgroundColor: "#C3E4ED"
    },
    txt: {
        fontSize: 30,
        color: '#C2185B',
        fontFamily: "StrickenBrush-D9a3",

        marginTop: 6
    },
    Touchcontainer: {
        marginTop: 30,
        alignItems: "center",
        // justifyContent:"space-evenly"
    },
    topacity: {
        width: "90%",
        height: "16%",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        flexDirection: "row",
        marginTop: 3,
        elevation: 2,
        // marginBottom:16,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }

    },
    topacitylogout: {
        width: "90%",
        height: "17%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#C2185B',
        flexDirection: "row",
        marginHorizontal: 30,
        elevation: 2,
        //marginBottom:16,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }
    },

    text: {
        fontSize: 18,

    },
    textlogou: {
        fontSize: 30,
        color: '#ffffff',
        fontFamily: "StrickenBrush-D9a3",
        elevation: 2,
        //  marginBottom:16,
        paddingTop: 20


    },
    icon: {
        marginRight: 11
    },
    txtabout: {
        fontSize: 19,
        marginHorizontal: 13,
        marginTop: 32

    },
    conabout: {
        // marginTop:32,
        marginHorizontal: 10
    }



})
