import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';




const ViewRequestCustomer = ({ navigation }) => {


    const [list, setList] = useState([])

    const deleteRequest = (item) => {
        console.log(`item`, item.CustomerId)
        database()
            .ref(`Service_Request` + item.CustomerId)
            .remove();
            alert("Request Deleted Successfully");

    };

    database()
        .ref(`Service_Request`)
        .on('value', snapshot => {
            let li = []
            snapshot.forEach((child) => {
                var show = child.val().MecahnicId
                if (show === auth().currentUser.uid) {

                    li.push({
                        name: child.val().CustomerName,
                        email: child.val().CustomerEmail,
                        phone: child.val().CustomerPhone,
                        CustomerLatitude:child.val().latitude,
                        CustomerLongitude:child.val().longitude,
                        CustomerId:child.val().CustomerId,




                    })
                }

            })


            setList(li)



        });
       





    const RenderItem = (item) => {
        return (
            <View>

                <View style={styles.touchcontainer}>
                    <Text style={styles.listtext}>Name:   {item.name}</Text>
                    <Text style={styles.listtext}>Email:  {item.email}</Text>
                    <Text style={styles.listtext}>Phone:  {item.phone}</Text>
                    <Text style={styles.listtext}>latitude:  {item.CustomerLatitude}</Text>

                    <Text style={styles.listtext}>longitude:  {item.CustomerLongitude}</Text>


                    <View style={styles.iconcontainer}>
                        <Icons name="check" style={styles.iconaccept}
                            onPress={() => navigation.navigate("TrackCustomerLocation", {
                                CustomerLatitude: item.CustomerLatitude,
                                CustomerLongitude: item.CustomerLongitude, phone: item.phone
                                    })} />
                        <Icons name="cross" style={styles.icondecline}
                            onPress={() => deleteRequest(item)} />

                    </View>

                </View>


            </View>

        )
    }
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>CUSTOMER REQUEST</Text>
            <View style={styles.listcontainer}>

                <FlatList
                    data={list}
                    keyExtractor={(item) => item.CustomerId}
                    renderItem={({ item }) => (
                        RenderItem(item)
                    )}
                />


            </View>

        </View>
    )
}

export default ViewRequestCustomer

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

    iconaccept: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5

    },
    icondecline: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5,
        marginRight: 15,

    },
    iconcontainer: {
        flexDirection: "row-reverse",
        marginTop: 0

    }

})
