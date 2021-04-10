import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, NativeModules } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage'
//import { useState } from 'react'



const CustomerProfile = ({navigation}) => {
    const [name, setName]=useState('')
    const [phone, setPhone]=useState('')
    const [email, setEmail]=useState('')
    const [address, setAddress]=useState('')
    const details=()=>{
        var currentUser = auth().currentUser
            database().ref(`Customers`).child(currentUser.uid).on('value',  (data) =>{
                console.log('ziaher')
            let name1 = data.child('name').val();
            setName(name1);
            let phone = data.child('phone').val();
            setPhone(phone);
            let email = data.child('email').val();
            setEmail(email)
            let address = data.child('address').val();
            setAddress(address)

            })

            console.log(`name`, name)
    }
    useEffect(()=>{
        details()
        return()=>
        console.log("warning")
    },[])

    
        const signOutUser = async () => {
                try {
                    auth().signOut();
                    console.log(signOutUser)
                    navigation.navigate("Customerlogin")
                } catch (e) {
                    console.log(e);
                }
            }
            

      


        return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
            <Image style={styles.img}
                    source={require('../assets/profile.jpg')}
                />

            <Text style={styles.txt}>{name}
            </Text>
            </View>
            <View style={styles.Touchcontainer}>
                <TouchableOpacity style={styles.topacity}>
                <Icon name="phone" style={styles.icon}size={30} color="#000000"  />

                     <Text style={styles.text}>{phone}</Text> 

                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacity}>
                <Icon name="email" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>{email}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacity}>
                <ICon name="place" style={styles.icon}size={30} color="#000000"  />

                     <Text style={styles.text}>{address}</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacitylogout} onPress={()=>signOutUser()}>
                <ICon name="logout" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.textlogou}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomerProfile

const styles = StyleSheet.create({
    imgcontainer:{
        borderRadius:28,
       // backgroundColor:"red",
        height:"26%",
        marginTop:4,
        alignItems:"center",
        //justifyContent:"space-evenly"

    },
    img:{
        width:"30%",
        height:"90%",
        borderRadius:70,
        //marginLeft:70
        alignItems:"center"

    },
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    txt:{
        fontSize:30,
        //padding:10
        marginTop:6,
        marginLeft:19,
        fontWeight:"bold"
    },
    Touchcontainer:{
        marginTop:30,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    topacity: {
        width: "100%",
        height:"18%",
        borderRadius: 20,
        alignItems: 'center',
       // justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        //shadowOpacity:1
        flexDirection:"row",
        marginHorizontal:10,
        elevation:3,
        borderColor:"#000000",
        borderWidth:1.5

    },
    topacitylogout: {
        width: "90%",
        height:"18%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003F87',
        //shadowOpacity:1
        flexDirection:"row",
        marginHorizontal:30,
        borderWidth:1.5,
        borderColor:"#000000"

    },
    
    text:{
        fontSize:22,
        marginLeft:70
    },
    textlogou:{
        fontSize:22,
       
        
    },
    icon:{
        marginLeft:35
    },
    phoneicon:{
        marginRight:56
    }
   
    
    

})
