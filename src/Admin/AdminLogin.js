import React,{useState} from 'react'
import {     Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import  * as firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'




const AdminLogin = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

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
  .signInWithEmailAndPassword(email,password.toString())
  .then(() => {
    console.log('User signed in ');
    navigation.navigate('AdminHome')
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
       

    }

    return (
        <View>
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
            <TouchableOpacity onPress={()=>navigation.navigate("AdminSignup")}>
            <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
        </TouchableOpacity>
            
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
})
