import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'






const CustomerSignup = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  //const [isCustomer, setCustomer]=useState('')

  const _VerifyAsync = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || password.length == '') {
      alert("All inputs must be filled!");
      return;
    }
    if (reg.test(email) === false) {
      alert("INVALID EMAIL!");
      return;
    }



    auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (auth().currentUser) {
          userId = auth().currentUser.uid;
          if (userId) {
            AsyncStorage.setItem('customerId', userId);
            database().ref('Customers/' + userId).set({
              email: email,
              password: password,
              name: name,
              address: address,
              CustomerId: userId,
              phone: phone,
              Customer: true
            })
          }
        }
        alert("Customer Successfully Registered")
        navigation.navigate("Customerlogin")
      }).catch(function (error) {

        console.log(error);
      })

  }





  return (
    <ScrollView>
      <View>
        <View style={styles.img}>
          <Image
            source={require('../assets/txtl.png')}
          />
          <Image style={styles.ease}
            source={require('../assets/ease.png')}
          />
          <Text style={styles.text}>Customer Signup</Text>

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
            label="Password"
            value={password}
            mode='outlined'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            label="Phone"
            value={phone}
            mode='outlined'
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            label="Address"
            value={address}
            mode='outlined'
            onChangeText={text => setAddress(text)}
          />
          <TouchableOpacity style={styles.signupbtn} onPress={() => _VerifyAsync()}>
            <Text style={styles.txtsign}>Signup </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
          </TouchableOpacity>

        </View>



      </View>
    </ScrollView>
  )
}


export default CustomerSignup;

const styles = StyleSheet.create({
  img: {
    //backgroundColor:"#667986",
    alignItems: "center",
    marginTop: 20
  },
  text: {
    fontSize: 29,
    fontFamily: "StrickenBrush-D9a3",
    marginTop: 20

  },
  txtinput: {
    paddingHorizontal: 40,
    marginVertical: 20
    //justifyContent:"space-evenly",


  },
  signupbtn: {
    backgroundColor: "#C2185B",
    elevation: 10,
    shadowOpacity: 50,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    width: 190,
    height: 50,
    marginTop: 30,
    marginLeft: 40,
    alignItems: "center"

  }

  ,
  ease: {
    marginTop: 10
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontWeight: '500',
    color: '#C2185B',
    fontFamily: "StrickenBrush-D9a3",
    marginTop: 20,
    fontSize: 18
  },
  txtsign: {
    padding: 10,
    fontSize: 22,
    fontFamily: "StrickenBrush-D9a3",
    color: "#fff",
    textAlign: 'center',
    paddingTop: 15
  }
})

