import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper';
import database from '@react-native-firebase/database';



const EditMechanic = ({ route, navigation }) => {
    const [MecahnicId, setMecahnicId] = useState(route.params.paramKey.MecahnicId)
    const [name, setName] = useState(route.params.paramKey.name)
    const [email, setEmail] = useState(route.params.paramKey.email)
    const [address, setAddress] = useState(route.params.paramKey.address)
    const [phone, setPhone] = useState(route.params.paramKey.phone)
    const [expertise, setExperise] = useState(route.params.paramKey.expertise)

    const updateData = () => {
        database()
            .ref('Mecahnic/' + MecahnicId)
            .update({
                name: name,
                email: email,
                address: address,
                phone: phone,
                expertise: expertise
            })
            .then(() => alert("Profile Updated")
            );

    }





    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}> EDIT MECHANIC </Text>
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
                        label="Location"
                        value={address}
                        mode='outlined'
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
                <View style={styles.txtinput}>
                    <TextInput
                        label="Expertise"
                        value={expertise}
                        mode='outlined'
                        numberOfLines={5}
                        multiline={true}
                        onChangeText={text => setExperise(text)}
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

export default EditMechanic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"

    },
    text: {
        fontSize: 35,
        textAlign: "center",
        color: '#C2185B',
        fontFamily: "StrickenBrush-D9a3",
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
        marginTop: 40
    },
    txtbtn: {
        marginHorizontal: 40,
        justifyContent: "space-evenly",
        marginVertical: 30,
        marginTop: 10,
        flexDirection: "row"
    },
    canceltouch: {
        backgroundColor: '#C2185B',
        height: 35,
        width: 130,
        marginHorizontal: 12,
        borderRadius: 10

    },
    txtupdate: {
        textAlign: 'center',
        paddingTop: 5,
        color: '#ffffff',
        fontFamily: "StrickenBrush-D9a3",
        fontSize: 22
    }

})
