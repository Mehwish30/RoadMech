import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database';



const Mechanic = ({ navigation }) => {
    const deleteMechanic = (item) => {
        database()
            .ref('Mecahnic/' + item.MecahnicId)
            .remove();

    };

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
                    address: child.val().address,
                    MecahnicId: child.val().MecahnicId,
                    expertise: child.val().expertise,
                    image: child.val().image
                })




            })
            setList(li)

        });



    const RenderItem = (item) => {
        return (
            <View>

                <View style={styles.touchcontainer}>
                    <Image source={{ uri: item.image }} style={{ width: "45%", height: 150, borderColor: '#000000', borderWidth: 1.5, marginLeft: 80, borderRadius: 30 }} />

                    <Text style={styles.listtext}>Mechanic ID: {item.MecahnicId}</Text>
                    <Text style={styles.listtext}>Name:             {item.name}</Text>
                    <Text style={styles.listtext}>Email:            {item.email}</Text>
                    <Text style={styles.listtext}>Expertise:      {item.expertise}</Text>
                    <Text style={styles.listtext}>Location:      {item.address}</Text>
                    <Text style={styles.listtext}>Phone:           {item.phone}</Text>
                    <View style={styles.iconcontainer}>
                        <Icon name="delete" style={styles.icondelete} onPress={() => deleteMechanic(item)} />
                        <Icons name="edit" style={styles.iconedit} onPress={() => navigation.navigate("EditMechanic", { paramKey: item })} />
                    </View>
                </View>

            </View>

        )
    }
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>MECHANIC</Text>
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

export default Mechanic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C3E4ED",

    },
    txt: {

        fontSize: 45,
        textAlign: "center",
        marginTop: 35,
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
        color: "white",
        marginBottom: 5

    },
    icondelete: {
        fontSize: 28,
        marginLeft: 5,
        color: "white",
        marginBottom: 5,
        marginRight: 15,

    },
    iconcontainer: {
        // flexDirection:"row",
        flexDirection: "row-reverse",
        marginTop: 0

    }


})
