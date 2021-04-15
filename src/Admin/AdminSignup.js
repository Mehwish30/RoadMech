import React,{useState} from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'

const AdminSignup = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [phone, setPhone]=useState('')
    const [address, setAddress]=useState('')
    const [name, setName]=useState('')
    const [Admin, setAdmin]=useState('')


    const _Verifyadmin = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(name.trim() === "" || email.trim() === "" || phone.trim() === ""  || password.length=='')
        {
          alert("All inputs must be filled!");
          return;
        }
        if(reg.test(email) === false){
          alert("INVALID EMAIL!");
          return ;
        }
       

auth().createUserWithEmailAndPassword(email, password)
.then(()=>{
    if (auth().currentUser) {
      userId = auth().currentUser.uid;
      if (userId) {
        AsyncStorage.setItem('AdminId', userId);
          database().ref('Admin/' + userId).set({
            email:email,
            password:password,
            name:name,
            address:address,
            AdminId:userId,
          phone:phone,
          Admin:true
          })
      }
    }
    alert("Successfully added Admin")
    navigation.navigate("AdminLogin")
  }).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
     // console.log('Register!');
      console.log(error);
  })
  
}

    



    return (
        <View>
            <View style={styles.img}>
            <Image   
                source={require('../assets/logo.png')}
            />
            <Text style={styles.text}>Please Signup</Text>

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
             <Button   mode="contained" onPress={() => _Verifyadmin()}>
                 Signup
            </Button>   
            
            </View>


            
         </View>
    )
}

export default AdminSignup;

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
    }
})
