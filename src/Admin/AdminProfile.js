import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';



const AdminProfile = ({ navigation }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const details = () => {
        var currentUser = auth().currentUser
        database().ref(`Admin`).child(currentUser.uid).on('value', (data) => {
            let name1 = data.child('name').val();
            setName(name1);
            let phone = data.child('phone').val();
            setPhone(phone);
            let email = data.child('email').val();
            setEmail(email)

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
            navigation.navigate("AdminLogin")
        } catch (e) {
            console.log(e);
        }
    }




    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image style={styles.img}
                    source={require('../assets/admin.jpg')}
                />
                <Text style={styles.txt}>{name}</Text>
            </View>
            <View style={styles.Touchcontainer}>
                <TouchableOpacity style={styles.topacity}>
                    <Icon name="phone" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.text}>{phone}</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.topacity}>
                    <Icon name="email" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.text}>{email}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacitylogout} onPress={() => signOutUser()}>
                    <ICon name="logout" style={styles.icon} size={30} color="#000000" />

                    <Text style={styles.textlogou}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdminProfile

const styles = StyleSheet.create({
    imgcontainer: {
        borderRadius: 28,
        height: "26%",
        marginTop: 4,
        alignItems: "center",


    },
    img: {
        width: "40%",
        height: "90%",
        borderRadius: 20,
        marginTop: 50,
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
        justifyContent: "space-evenly"
    },
    topacity: {
        width: "90%",
        height: "18%",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        flexDirection: "row",
        marginTop: 20,
        elevation: 2,
        marginBottom: 16,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }

    },
    topacitylogout: {
        width: "90%",
        height: "18%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C2185B',
        flexDirection: "row",
        marginHorizontal: 30,
        elevation: 2,
        marginBottom: 16,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }
    },

    text: {
        fontSize: 22,

    },
    textlogou: {
        fontSize: 30,
        color: '#ffffff',
        fontFamily: "StrickenBrush-D9a3",
        elevation: 2,
        marginBottom: 16,
        paddingTop: 20


    },
    icon: {
        marginRight: 11
    }



})
