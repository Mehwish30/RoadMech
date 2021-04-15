import React,{useState} from 'react'
import {     Text, View, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'

const AdminLogin = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const  getAdminRole = async() => {
      AsyncStorage.getItem("AdminId") 
        .then((result) =>
    
            database()
            .ref("Admin/" + result )
            .on("value", (snapshot) => {
              if (snapshot.exists()) {
                var isAdmin = snapshot.child("Admin").val();
               // console.log("Is user a Admin?" + isAdmin);
               // console.log(snapshot.val());
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
  
    const  _VerifyAsync = async () => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(email.trim() === ""  || password.length=='')
      {
        alert("All inputs must be filled!");
        return;
      }
      if(reg.test(email) === false){
        alert("INVALID EMAIL!");
        return ;
      }
   auth()
  .signInWithEmailAndPassword(email, password)
  .then(
  () => {
    AsyncStorage.setItem("AdminId", auth().currentUser.uid);
    getAdminRole();
    

  },
  (error) => {
    console.log(error)
    
  }
  
  ) ;
  
  
  
  };
  
  
  
   
    return (
        <View style={styles.container}>
            <View style={styles.img}>
            <Image   
                source={require('../assets/logo.png')}
            />
            <Text style={styles.text}>Please login to continue</Text>

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
             <Button   mode="contained" onPress={() => _VerifyAsync()}>
                 LogIn
            </Button>   
            
            </View>


            
         </View>
    )
}

export default AdminLogin

const styles = StyleSheet.create({
    img:{
        //backgroundColor:"#667986",
        alignItems:"center",
        marginTop:20
    },
    text:{
        fontSize:29
    },
    txtinput:{
        paddingHorizontal:40,
        height:'50%',
        justifyContent:"space-evenly"
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
      //  fontFamily: 'Lato-Regular',
      },
      container :{
        backgroundColor:'#ffffff',
        flex:1,
      }
})
