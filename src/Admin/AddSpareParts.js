import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'





const AddSpareParts = () => {

  const UploadGaller=()=>{
    launchImageLibrary({quality:0.5},(fileobj)=>{
       console.log(fileobj)
       const uploadTask= storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
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


    const [name, setName]=useState('')
    const [desc, setDesc]=useState('')
    const [price, setPrice]=useState('')
    const [image, setImage]=useState('')

    const UploadSparePartsData= async () => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(name.trim() === "" || desc.trim() === "" || price.trim() === "")
      {
        alert("All inputs must be filled!");
        return;
      }
      
try{
  if (auth().currentUser) {
    let userId = auth().currentUser.uid;
    if (userId) {
      AsyncStorage.setItem('AdminId', userId);
        database().ref('SpareParts/' + userId).set({
          name:name,
          desc:desc,
          price:price,
          AdminId:userId,
          image:image
          
        
        })
        //console.log("he")
      } }
  alert("Spare Parts Added")
}
 catch(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error);
}
}

  const Uploadsparepart=()=>{
        launchCamera({quality:0.5},(fileobj)=>{
           console.log(fileobj)
           const uploadTask= storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
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
      

     
      
    return (
        <View style={styles.container}>
            <Text style={styles.text}> ADD SPARE PARTS </Text>
            <TextInput
                label="Name"
                value={name}
                mode='outlined'
                onChangeText={text => setName(text)}
                />
            
            <TextInput
                label="Description about Spare Parts"
                value={desc}
                mode='outlined'
                numberOfLines={6}
                multiline={true}
                onChangeText={text => setDesc(text)}
                />
                <TextInput
                label="Price"
                value={price}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setPrice(text)}
                />
                <Button icon="camera" mode="contained" onPress={() => Uploadsparepart()}>
                Upload Image from camera
                </Button>
                <Button icon="camera" mode="contained" onPress={() => UploadGaller()}>
                Upload Image from gallery
                </Button>
                <Button   mode="contained" onPress={() => UploadSparePartsData()}>
                 Add Spare Parts
                 </Button>
            
            
        </View>
    )
}

export default AddSpareParts

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:40,
        justifyContent:"space-evenly",
        backgroundColor:"#ffffff"
        
    },
    text:{
        fontSize:29,
        textAlign:"center"
    },
    
})
