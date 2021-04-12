import React from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'


let data = [
    {
        id: 1,
        name: "Mehwish",
        email: "mehwish@gmail.com",
        feedback: "This is Feedback."
        
    },
    {
        id: 2,
        name: "Faizan",
        email: "faizan@gmail.com",
        feedback: "impressive feeback."
        
    },
    {
        id: 3,
        name: "Alisha",
        email: "alisha@gmail.com",
        feedback: "Not Performing as expected."
        
    },

]

const ViewFeedback = () => {
    const RenderItem = (item) => {
        return (
            <View>
                 <TouchableOpacity  style={styles.touchcontainer}>
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
                data={data}
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
