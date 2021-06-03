import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'


const CustomerContactUs = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const Contact = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("All inputs must be filled!");
      return;
    }
    if (reg.test(email) === false) {
      alert("INVALID EMAIL!");
      return;
    }
    try {
      if (auth().currentUser) {
        userId = auth().currentUser.uid;
        if (userId) {
          AsyncStorage.setItem('customerId', userId);
          database().ref('CustomersConatct/' + userId).set({
            email: email,
            name: name,
            message: message,
            CustomerId: userId,


          })
          console.log("he")
        }
      }
      alert("Thanks for contacting us. We will reach you soon!!!!!")
    }
    catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Contacted!');
      console.log(error);
    }
  }






  return (


    <View style={styles.container}>

      <View style={styles.img}>
        <Image style={styles.img} source={require('../assets/txtl.png')} />

        <Image style={{ marginTop: 10 }}
          source={require('../assets/ease.png')}
        />
        <Text style={styles.text}>CONTACT US</Text>
      </View >
      <View style={styles.txtinput}>
        <TextInput
          label="Name"
          value={name}
          mode='outlined'
          onChangeText={text => setName(text)}
        />

        <TextInput
          label="Email"
          value={email}
          mode='outlined'
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Message"
          value={message}
          mode='outlined'
          numberOfLines={7}
          multiline={true}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity style={styles.btnlog} onPress={() => Contact()}>
          <Text style={styles.text1}>  Contact </Text>
        </TouchableOpacity>


      </View>

    </View>

  )
}
export default CustomerContactUs

const styles = StyleSheet.create({
  img: {
    //backgroundColor:"#667986",
    alignItems: "center",
    marginTop: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 26,
    marginTop: 15,
    fontFamily: "StrickenBrush-D9a3"
  },
  txtinput: {
    paddingHorizontal: 30,
    height: '75%',
    justifyContent: "space-evenly"
  },
  text1: {
    fontSize: 23,

    fontFamily: "StrickenBrush-D9a3",
    color: '#fff'
  },
  btnlog: {
    height: "10%",
    padding: 10,
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1.5,
    borderRadius: 10,
    width: '70%',
    marginHorizontal: 50,
    marginTop: 10,
    backgroundColor: "#C2185B",
    elevation: 10,
    shadowOpacity: 50,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }
  }


})
