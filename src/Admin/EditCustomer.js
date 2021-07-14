import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import database from '@react-native-firebase/database'
import { color } from 'react-native-reanimated';



const EditCustomer = ({ route, navigation }) => {
    const [CustomerId, setCustomerId] = useState(route.params.paramKey.CustomerId)
    const [name, setName] = useState(route.params.paramKey.name)
    const [email, setEmail] = useState(route.params.paramKey.email)
    const [address, setAddress] = useState(route.params.paramKey.address)
    const [phone, setPhone] = useState(route.params.paramKey.phone)

    const updateData = () => {
        database()
            .ref('Customers/' + CustomerId)
            .update({
                name: name,
                email: email,
                address: address,
                phone: phone,
            })
            .then(() => alert("Profile Updated")
            );

    }

    useEffect(() => {
        console.log(`{route.params.paramKey}`, route.params.paramKey.name)

    }, []);


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}> EDIT CUSTOMER </Text>
                <View style={styles.txttopinput}>
                    <TextInput
                        label="Name"
                        value={name}
                        mode='outlined'
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.txtinput}>

                    <TextInput
                        label="Email"
                        value={email}
                        mode='outlined'
                        multiline={true}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.txtinput}>
                    <TextInput
                        label="Address"
                        value={address}
                        mode='outlined'
                        keyboardType="numeric"
                        onChangeText={text => setAddress(text)}
                    />
                </View>
                <View style={styles.txtinput}>
                    <TextInput
                        label="Phone"
                        value={phone}
                        mode='outlined'
                        keyboardType="numeric"
                        onChangeText={text => setPhone(text)}
                    />
                </View>
                <View style={styles.txtbtn}>
                    <TouchableOpacity style={styles.canceltouch} onPress={() => updateData()}>
                        <Text style={styles.txtupdate}>UPDATE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.canceltouch} onPress={() => navigation.goBack()}>
                        <Text style={styles.txtupdate}>CANCEL</Text>
                    </TouchableOpacity>





                </View>

            </View>
        </ScrollView>
    )
}

export default EditCustomer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"

    },
    text: {
        textAlign: 'center',
        fontSize: 35,
        fontFamily: "VioletWasteland-Bgw5",
        marginTop: 40,
        color: '#008000'

    },

    txtinput: {
        marginHorizontal: 40,
        justifyContent: "space-evenly",
        marginVertical: 30,
        marginTop: 10
    },
    txttopinput: {
        marginHorizontal: 40,
        justifyContent: "space-evenly",
        marginVertical: 30,
        marginTop: 80
    },
    txtbtn: {
        marginHorizontal: 40,
        justifyContent: "space-evenly",
        marginVertical: 30,
        marginTop: 10,
        flexDirection: "row"
    },
    canceltouch: {
        backgroundColor: '#008000',
        height: 35,
        width: 130,
        marginHorizontal: 12,
        borderRadius: 10

    },
    txtupdate: {
        textAlign: 'center',
        paddingTop: 5,
        color: '#ffffff',
        fontFamily: 'VioletWasteland-Bgw5',
        fontSize: 22
    }

})
