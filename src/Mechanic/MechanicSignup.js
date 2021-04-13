import React,{useState} from 'react'
import {     Text, View, StyleSheet, Image,ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';



const MechanicSignup = ({navigation}) => {

    const UploadGallery=()=>{
        launchImageLibrary({quality:0.5},(fileobj)=>{
           console.log(fileobj)
           const uploadTask= storage().ref().child(`/mechanic/${Date.now()}`).putFile(fileobj.uri)
           uploadTask.on('state_changed', 
    (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if(progress==100){alert("Uploaded")}
    
    
    }, 
    (error) => {
    alert(error)
    }, 
    () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      setImage(downloadURL)
    });
    }
    );
    
    
        }
        )
      }

    const UploadCamera=()=>{
    launchCamera({quality:0.5},(fileobj)=>{
       console.log(fileobj)
       const uploadTask= storage().ref().child(`/mechanicpic/${Date.now()}`).putFile(fileobj.uri)
       uploadTask.on('state_changed', 
(snapshot) => {
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
if(progress==100){alert("Uploaded")}


}, 
(error) => {
alert(error)
}, 
() => {
uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  console.log('File available at', downloadURL);
  setImage(downloadURL)
});
}
);


    }
    )
  }


    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [name, setName]=useState('')
    const [image, setImage]=useState('')
    const [phone, setPhone]=useState('')
    const [expertise, setExpertise]=useState('')
    const [address, setAddress]=useState('')


    const _VerifyAsync = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(name.trim() === "" || email.trim() === "" || phone.trim() === ""  || password.length=='' || expertise.trim() === "" || address.trim() === "")
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
        AsyncStorage.setItem('MechanicId', userId);
          database().ref('Mecahnic/' + userId).set({
            email:email,
            password:password,
            name:name,
            address:address,
            MecahnicId:userId,
            expertise:expertise,
            image:image,
          phone:phone
          })
      }
    }
    alert("Successfully added")
  }).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
     // console.log('Register!');
      console.log(error);
  })
  navigation.navigate("Mechaniclogin")
}

    

    return (
        <ScrollView>
        <View style={styles.conatiner}>
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
                keyboardType='numeric'
                onChangeText={text => setPhone(text)}
                />
                 <TextInput
                label="Address"
                value={address}
                mode='outlined'
                numberOfLines={3}
                multiline={true}
                
                onChangeText={text => setAddress(text)}
                />
                 <TextInput
                label="Expertise"
                value={expertise}
                mode='outlined'

                numberOfLines={5}
                multiline={true}
                onChangeText={text => setExpertise(text)}
                />
                <Button icon="camera" mode="contained" style={{marginTop:15}} onPress={() => UploadCamera() }>
                Upload Image from camera
                </Button>
                <Button icon="camera" mode="contained" style={{marginTop:15}}  onPress={() => UploadGallery()}>
                Upload Image from gallery
                </Button>
             <Button   mode="contained"  style={{marginTop:25}} onPress={() => _VerifyAsync()}>
                 Signup
            </Button>   
            
            </View>


            
         </View>
         </ScrollView>
    )
}

export default MechanicSignup;

const styles = StyleSheet.create({
    img:{
        //backgroundColor:"#667986",
        alignItems:"center",
        marginTop:10,
        height:"20%"
    },
    text:{
        fontSize:29
    },
    txtinput:{
        paddingHorizontal:30,
        height:'70%',
        justifyContent:"center",
        marginTop:45

    },
    conatiner:{
        flex:1,
        backgroundColor:"#ffffff"
    }
    
    
})
