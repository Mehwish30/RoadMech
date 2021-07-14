import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/AntDesign'
import Icongear from 'react-native-vector-icons/FontAwesome'





const BuySpareParts = () => {

 

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
 
  const BuySparePartsData = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.trim() === "" || mobile.trim() === "" || email.trim() === ""|| address=="") {
      alert("All inputs must be filled!");
      return;
    }

    try {
      if (auth().currentUser) {
        let userId = auth().currentUser.uid;
        if (userId) {
          AsyncStorage.setItem('CustomerId', userId);
          database().ref('DeliverSpareParts/'+userId).push({
            name: name,
            mobile: mobile,
            email: email,
            address: address,
           

          })
        }
      }
      alert("Checkout Succesfull")
    }
    catch (error) {
      console.log(error);
    }

  }

  




  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}> Checkout </Text>
        
        
        <View style={styles.txttopinput}>
          <TextInput
            label="Name"
            value={name}
            mode='outlined'
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.txtinput}>
          <TextInput
            label="Mobile"
            value={mobile}
            mode='outlined'
           
            onChangeText={text => setMobile(text)}
          />
        </View>
        <View style={styles.txtinput}>
          <TextInput
            label="Email"
            value={email}
            mode='outlined'
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.txtinput}>
          <TextInput
            label="Delivery Address"
            value={email}
            mode='outlined'
            numberOfLines={6}
            multiline={true}
            onChangeText={text => setAddress(text)}
          />
        </View>
        
        <TouchableOpacity style={styles.addspare} onPress={() => BuySparePartsData()}>
          <Icongear name='gear' style={styles.Icongear} />
          <Text style={styles.txtupdate}>Checkout</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default BuySpareParts

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"

  },
  text: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "StrickenBrush-D9a3",
    color: "#C2185B",
    marginTop: 60
  },
  txtinput: {
    marginHorizontal: 30,
    justifyContent: "space-evenly",
    marginVertical: 30,
    marginTop: 10
  },
  txttopinput: {
    marginHorizontal: 30,
    justifyContent: "space-evenly",
    marginVertical: 30,
    marginTop: 40
  },
  txtbtn: {
    marginHorizontal: 40,
    justifyContent: "space-evenly",
    marginVertical: 30,
    marginTop: 10,
    flexDirection: "row"
  },
  camera: {
    backgroundColor: '#C2185B',
    height: 45,
    width: 140,
    marginHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  addspare: {
    backgroundColor: '#C2185B',
    height: 45,
    width: 180,
    marginHorizontal: 12,
    borderRadius: 10,
    marginLeft: 75,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtupdate: {
    textAlign: 'center',
    paddingTop: 5,
    color: '#ffffff',
    fontFamily: 'VioletWasteland-Bgw5',
    fontSize: 18,
    marginLeft: 10

  },
  Icon: {
    fontSize: 25,
    marginLeft: 10,
    color: "white"


  },
  Icongear: {
    fontSize: 25,
    marginLeft: 25,
    color: "white"
  }

})
