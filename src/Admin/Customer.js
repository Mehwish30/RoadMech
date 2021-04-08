import React from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity, ScrollView} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'

let data = [
    {
        id: 1,
        name: "Mehwish",
        email: "mehwish@gmail.com",
        expertise: "BSSE",
        location: "Rawalpindi",
        phone:456778
    },
    {
        id: 2,
        name: "Faizan",
        email: "faizan@gmail.com",
        expertise: "IT",
        location: "Rawalpindi",
        phone:456778
    },
    {
        id: 3,
        name: "Alisha",
        email: "alisha@gmail.com",
        expertise: "CS",
        location: "Rawalpindi",
        phone:456778
    },
    {
        id: 4,
        name: "manzoor",
        email: "manzoor@gmail.com",
        expertise: "CS",
        location: "Rawalpindi",
        phone:456778
    },
]

const Customer = ({navigation}) => {
    const RenderItem = (item) => {
        return (
            <View>
                
                <View  style={styles.touchcontainer}>
                <Text style={styles.listtext}>Customer ID: {item.id}</Text>
                <Text style={styles.listtext}>Name:             {item.name}</Text>
                <Text style={styles.listtext}>Email:            {item.email}</Text>
                <Text style={styles.listtext}>Location:      {item.location}</Text>
                <Text style={styles.listtext}>Phone:           {item.phone}</Text>
                <View style={styles.iconcontainer}>
                <Icon name="delete" style={styles.icondelete} onPress={()=>console.log("pressd") }/>
                <Icons name="edit" style={styles.iconedit} onPress={()=>navigation.navigate("EditCustomer") }/>
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

export default Customer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",

    },
    txt:{
        fontWeight:"bold",
        fontSize:35,
        textAlign:"center",
        marginTop:30
    },
    listtext:{
        fontSize:18,
        padding:4,
        marginLeft:10
    },
    listcontainer:{
        marginTop:35,
       marginBottom:65
    },
    touchcontainer:{
        borderWidth:0.3,
        marginVertical:10,
        borderRadius:10,
        backgroundColor:"#fafafa",
        borderColor:"#000000",
        marginHorizontal:10,
        elevation:2,
        marginBottom:16
    },
    iconedit:{
        fontSize:28,
        marginLeft:5,
        color:"green",
       // marginLeft:18
       marginBottom:5

    },
    icondelete:{
        fontSize:28,
       marginLeft:5,
        color:"red",
        marginBottom:5,
        marginRight:15,

    },
    iconcontainer:{
       // flexDirection:"row",
       flexDirection:"row-reverse",
       marginTop:0
    
    }

})
