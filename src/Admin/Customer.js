import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, getSelection } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database';



const ViewRequestCustomer = ({ navigation }) => {

    const deleteCust = (item) => {
        console.log(`item`, item.CustomerId)
        database()
            .ref('Customers/' + item.CustomerId)
            .remove();

    };

    const [list, setList] = useState([])

    database()
        .ref(`Customers`)
        .on('value', snapshot => {
            let li = []
            //let list=[]
            snapshot.forEach((child) => {

                li.push({
                    //Id: child.val().CustomerId,
                    name: child.val().name,
                    email: child.val().email,
                    phone: child.val().phone,
                    address: child.val().address,
                    CustomerId: child.val().CustomerId,
                })
                // setMessage(message)
                //  console.log(li)




            })
            //console.log('User data: ', li.phone);
            setList(li)
            // console.log(list.phone)

            // console.log(li)

        });





    const RenderItem = (item) => {
        return (
            <View>

                <View style={styles.touchcontainer}>
                    <Text style={styles.listtext}>Customer ID: {item.CustomerId}</Text>
                    <Text style={styles.listtext}>Name:             {item.name}</Text>
                    <Text style={styles.listtext}>Email:            {item.email}</Text>
                    <Text style={styles.listtext}>address:      {item.address}</Text>
                    <Text style={styles.listtext}>Phone:           {item.phone}</Text>
                    <View style={styles.iconcontainer}>
                        <Icon name="delete" style={styles.icondelete} onPress={() => deleteCust(item)} />
                        <Icons name="edit" style={styles.iconedit} onPress={() => navigation.navigate("EditCustomer", { paramKey: item })} />
                    </View>
                </View>


            </View>

        )
    }
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>CUSTOMER</Text>
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
    iconedit: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5

    },
    icondelete: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5,
        marginRight: 15,

    },
    iconcontainer: {
        // flexDirection:"row",
        flexDirection: "row-reverse",
        marginTop: 0

    }

})
