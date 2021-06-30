import React,{ useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const ViewCart = () => {
    const [list, setList] = useState([])
   let id= auth().currentUser.uid

    database()
        .ref(`Cart`+id)
        .on('value', snapshot => {
           // console.log("s", snapshot)
            let li = []
            snapshot.forEach((child) => {
                var show = child.val().userId
                console.log("showss",show)
                if (id) {
                    console.log("id", id)

                    li.push({
                        name: child.val().name,
                        image: child.val().image,
                        desc: child.val().desc,
                        total:child.val().total,
                        price:child.value.price
                        //CustomerLongitude:child.val().CustomerLongitude,


                        

                    })
                    
                }

            })
            


            setList(li)



        });





    const RenderItem = (item) => {
        console.log("name", item.total)
        return (
            <View>

                <View style={styles.touchcontainer}>
                    <Text style={styles.listtext}>Name:   {item.name}</Text>
                    <Text style={styles.listtext}>image:  {item.image}</Text>
                    <Text style={styles.listtext}>desc:  {item.desc}</Text>
                    <Text style={styles.listtext}>price:  {item.price}</Text>
                    <Text style={styles.listtext}>total:  {item.total}</Text>
                    <View style={styles.iconcontainer}>
                        <Icons name="check" style={styles.iconaccept}
                            onPress={() => navigation.navigate("TrackCustomerLocation", { paramKey: item })} />
                        <Icons name="cross" style={styles.icondecline}
                            onPress={() => alert('Request Declined')} />

                    </View>

                </View>


            </View>

        )
    }
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>Cart</Text>
            <View style={styles.listcontainer}>

                <FlatList
                    data={list}
                    keyExtractor={(item) => item.price}
                    renderItem={({ item }) => (
                        RenderItem(item)
                    )}
                />


            </View>

        </View>
    )
}

export default ViewCart

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
