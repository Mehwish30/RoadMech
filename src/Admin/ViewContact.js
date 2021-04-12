import React,{useState} from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity, ScrollView} from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'
import  * as firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'


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

// database().ref(`CustomerConatct`).on('value', (snapshot) =>{
//     var li = []
//     snapshot.forEach((child)=>{
//      li.push({
//       key: child.val().CustomerID,
//       name:child.val().name,
//       age: child.val().age
//     })
//   })
// // list:li
// })
// console.log(li)
//const [message, setMessage]=useState('')

// database()
//   .ref(`CustomersConatct`)
//   .on('value', snapshot => {
//     let li = []
//        snapshot.forEach((child)=>{
//         li.push({
//              key: child.val().CustomerID,
//              name:child.val().name,
//                message: child.val().message
//               })
//               //setMessage(message)

       
//         })
//    // console.log('User data: ', snapshot.val());
//     console.log(message)
//   });

const ViewContact = () => {
    const [list, setList]=useState([])

database()
  .ref(`CustomersConatct`)
  .on('value', snapshot => {
    let li = []
    //let list=[]
       snapshot.forEach((child)=>{
           
        li.push({
             CustomerId: child.val().CustomerId,
             name:child.val().name,
               message: child.val().message,
               email:child.val().email
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
                data={list}
                keyExtractor={(item) => item.CustomerId}
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
