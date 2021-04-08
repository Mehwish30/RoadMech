import React from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity, ScrollView} from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler'

let data = [
    {
        id: 1,
        name: "Mehwish",
        email: "mehwish@gmail.com",
        message: "I have one problem."
        
    },
    {
        id: 2,
        name: "Faizan",
        email: "faizan@gmail.com",
        message: "I have one problem."
        
    },
    {
        id: 3,
        name: "Alisha",
        email: "alisha@gmail.com",
        message: "I have one problem."
        
    },
]

const ViewContact = () => {
    const RenderItem = (item) => {
        return (
            <View>
                
                 <TouchableOpacity  style={styles.touchcontainer}>
                <Text style={styles.listtext}>Name:{item.name}</Text>
                <Text style={styles.listtext}>Email:{item.email}</Text>
                <Text style={styles.listtext}>Message: {item.message}</Text>
            </TouchableOpacity>
            <View style={styles.seperator}>
                
             </View>
        

            </View>
           
           
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.txt}>CONTACTS</Text>
            <View style={styles.listcontainer}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    RenderItem(item)
                )}
            />

            </View>
            </ScrollView>
        </View>
    )
}

export default ViewContact

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"

    },
    txt:{
        fontWeight:"bold",
        fontSize:35,
        textAlign:"center",
        marginTop:30
    },
    seperator:{
       // borderWidth:2
    },
    listtext:{
        fontSize:18,
        padding:5,
        marginLeft:10
    },
    listcontainer:{
        marginTop:35
    },
    touchcontainer:{
        borderWidth:0.3,
        marginVertical:10,
        borderRadius:10,
        backgroundColor:"#fafafa",
        borderColor:"#000000",
        marginHorizontal:10,
        elevation:2
    }

})
