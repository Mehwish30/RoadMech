import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'

const AdminLogin = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const getAdminRole = async () => {
    AsyncStorage.getItem("AdminId")
      .then((result) =>

        database().ref("Admin/" + result)
          .on("value", (snapshot) => {
            if (snapshot.exists()) {
              var isAdmin = snapshot.child("Admin").val();
              if (isAdmin) {
                navigation.navigate("AdminHome")
              }
            } else {
              Alert.alert(
                "Alert",
                "This user is not registered as a Admin",
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
        AsyncStorage.setItem("AdminId", auth().currentUser.uid);
        getAdminRole();


      },
        (error) => {
          console.log(error)

        }

      );



  };
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image style={styles.img} source={require('../assets/txtl.png')} />

        <Image style={styles.ease}
          source={require('../assets/ease.png')}
        />
        <Text style={styles.text}>Admin Login</Text>

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
        <TouchableOpacity style={styles.btnlog} onPress={() => _VerifyAsync()}>
          <Text style={styles.txtlog}>LOGIN ADMIN</Text>

        </TouchableOpacity>

      </View>



    </View>
  )
}

export default AdminLogin

const styles = StyleSheet.create({
  img: {

    alignItems: "center",
    marginTop: 20
  },
  text: {
    fontSize: 35,
    fontFamily: "StrickenBrush-D9a3",
    marginTop: 20

  },
  ease: {
    marginTop: 10

  },
  txtinput: {
    paddingHorizontal: 40,
    height: '50%',
    justifyContent: "space-evenly"
  },

  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  btnlog: {

    height: "15%",
    padding: 10,
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: "#C2185B",
    elevation: 10,
    shadowOpacity: 50,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }

  },
  txt: {
    fontFamily: "StrickenBrush-D9a3",
    fontSize: 22

  },
  txtlog: {
    fontFamily: "StrickenBrush-D9a3",
    fontSize: 22,
    color: "#ffffff"

  }
})
