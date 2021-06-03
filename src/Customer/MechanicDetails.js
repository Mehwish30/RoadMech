import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import database from '@react-native-firebase/database';



const MechanicDetails = ({ navigation }) => {


    const [list, setList] = useState([])

    database()
        .ref(`Mecahnic`)
        .on('value', snapshot => {
            let li = []
            snapshot.forEach((child) => {

                li.push({
                    name: child.val().name,

                    email: child.val().email,
                    phone: child.val().phone,
                    expertise: child.val().expertise,
                    address: child.val().address,
                    MecahnicId: child.val().MecahnicId,

                })

            })

            setList(li)


        });





    const RenderItem = (item) => {
        //  console.log('item========================>>>',item.MecahnicId)
        return (
            <View>

                <View style={styles.touchcontainer}>
                    <Text style={styles.listtext}>Name:             {item.name}</Text>
                    <Text style={styles.listtext}>Email:            {item.email}</Text>
                    <Text style={styles.listtext}>address:      {item.address}</Text>
                    <Text style={styles.listtext}>Phone:           {item.phone}</Text>
                    <Text style={styles.listtext}>Expertise: {item.expertise}</Text>
                    <Text style={styles.listtext}>Id: {item.MecahnicId}</Text>


                    <View style={styles.iconcontainer}>
                        <Icon name="arrow-forward-circle" style={styles.iconcontinue}
                            onPress={() => navigation.navigate("CallMechanicHome", {
                                name: item.name,
                                email: item.email, phone: item.phone, expertise: item.expertise,
                                MecahnicId: item.MecahnicId, address: item.address
                            })} />
                    </View>
                </View>


            </View>

        )
    }
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>MECHANICS</Text>
            <View style={styles.listcontainer}>

                <FlatList
                    data={list}
                    keyExtractor={(item) => item.email}
                    renderItem={({ item }) => (
                        RenderItem(item)
                    )}
                />


            </View>

        </View>
    )
}

export default MechanicDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C3E4ED",

    },
    txt: {
        fontSize: 35,
        textAlign: "center",
        marginTop: 30,
        fontFamily: "StrickenBrush-D9a3",
        color: "#C2185B"
    },
    listtext: {
        fontSize: 18,
        padding: 4,
        marginLeft: 10,
        color: "#ffffff"
    },
    listcontainer: {
        marginTop: 35,
        marginBottom: 65
    },
    touchcontainer: {
        borderWidth: 1.5,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "#C2185B",
        borderColor: "#000000",
        marginHorizontal: 10,
        elevation: 2,
        marginBottom: 16,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }
    },

    iconcontinue: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5

    },

    iconcontainer: {
        flexDirection: "row-reverse",
        marginTop: 0

    }

})
