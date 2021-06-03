import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'
import database from '@react-native-firebase/database';


const CustomerLogin = ({ navigation }) => {
  // console.log(`navigation from customer`, navigation)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const ForgotPassword = async () => {
    auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Please check your mail")
      })
  }

  const getCustomerRole = async () => {
    AsyncStorage.getItem("CustomerId")
      .then((result) =>

        database().ref("Customers/" + result)
          .on("value", (snapshot) => {
            if (snapshot.exists()) {
              var isCustomer = snapshot.child("Customer").val();
              // console.log("Is user a Customer?" + isCustomer);
              // console.log(snapshot.val());
              if (isCustomer) {
                navigation.navigate("CustomerHome")
              }
            } else {
              Alert.alert(
                "Alert",
                "This user is not registered as a Customer",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                ]
              );
            }
          })
      );
  };

  const _VerifyAsync = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "" || password.length == '') {
      alert("All inputs must be filled!");
      return;
    }
    if (reg.test(email) === false) {
      alert("INVALID EMAIL!");
      return;
    }


    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        AsyncStorage.setItem("CustomerId", auth().currentUser.uid);
        getCustomerRole();

      },
        (error) => {
          alert("EMAIL AND PASSWORD INVALID")

        }

      );

  };



  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image style={styles.pic} source={require('../assets/txtl.png')} />

        <Image style={styles.ease}
          source={require('../assets/ease.png')}
        />
        <Text style={styles.text}>Customer Login</Text>

      </View >
      <View style={styles.txtinput}>
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
      </View>
      <View style={styles.top}>

        <TouchableOpacity style={styles.btnlog} onPress={() => _VerifyAsync()}>
          <Text style={styles.txtlog}>LOGIN CUSTOMER</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => ForgotPassword()}>
          <Text style={styles.navButtonText}>
            Forgot Password
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.noacc} onPress={() => navigation.navigate("CustomerSignup")}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
        </Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default CustomerLogin

const styles = StyleSheet.create({
  img: {

    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontSize: 30,
    fontFamily: "StrickenBrush-D9a3",
    marginTop: 20

  },
  txtinput: {
    paddingHorizontal: 40,
    height: '35%',
    justifyContent: "space-evenly"
  },
  navButtonText: {
    fontSize: 15,
    color: '#C2185B',
    fontFamily: "StrickenBrush-D9a3",
    marginLeft: 30,



  },
  pic: {
    marginTop: 70,
  },
  btnlog: {

    height: "40%",
    padding: 10,
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1.5,
    borderRadius: 10,
    width: '70%',
    marginHorizontal: 50,
    backgroundColor: "#C2185B",
    elevation: 10,
    shadowOpacity: 50,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }
  },
  txtlog: {
    fontFamily: "StrickenBrush-D9a3",
    fontSize: 22,
    color: "#ffffff"

  },
  container: {
    flex: 1,
    backgroundColor: "#fff"

  },
  top: {
    marginBottom: 4,
    height: "50%"
  },
  noacc: {
    // marginBottom:100
    marginTop: 10

  },
  ease: {
    marginTop: 10
  }


})
