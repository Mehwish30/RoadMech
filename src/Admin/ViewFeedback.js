import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';




const ViewFeedback = () => {
    const [list, setList] = useState([])

    database()
        .ref(`Customersfeedback`)
        .on('value', snapshot => {
            let li = []
            //let list=[]
            snapshot.forEach((child) => {

                li.push({
                    CustomerId: child.val().CustomerId,
                    name: child.val().name,
                    feedback: child.val().feedback,
                    email: child.val().email
                })
                // setMessage(message)
                //  console.log(li)




            })
            //console.log('User data: ', snapshot.val());
            setList(li)

            // console.log(li)

        });
    console.log(list)

    const RenderItem = (item) => {
        return (
            <View>
                <TouchableOpacity style={styles.touchcontainer}>
                    <Text style={styles.listtext}>Name:        {item.name}</Text>
                    <Text style={styles.listtext}>Email:        {item.email}</Text>
                    <Text style={styles.listtext}>Feedback: {item.feedback}</Text>
                </TouchableOpacity>
                <View style={styles.seperator}>

                </View>


            </View>


        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>FEEDBACK</Text>
            <View style={styles.listcontainer}>
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        RenderItem(item)
                    )}
                />

            </View>
        </View>
    )
}

export default ViewFeedback

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
        padding: 5,
        marginLeft: 10,
        color: '#ffffff'
    },
    listcontainer: {
        marginTop: 35
    },
    touchcontainer: {
        borderWidth: 0.3,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "#C2185B",
        borderColor: "#000000",
        marginHorizontal: 10,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }

    }

})
