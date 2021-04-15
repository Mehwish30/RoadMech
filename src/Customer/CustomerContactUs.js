import React,{useState} from 'react'
import { StyleSheet, Text, View , Image, KeyboardAvoidingView} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import  * as firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'


const CustomerContactUs=() =>{
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [message, setMessage]=useState('')

    const Contact = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(name.trim() === "" || email.trim() === "" || message.trim() === "")
        {
          alert("All inputs must be filled!");
          return;
        }
        if(reg.test(email) === false){
          alert("INVALID EMAIL!");
          return ;
        }
try{
    if (auth().currentUser) {
      userId = auth().currentUser.uid;
      if (userId) {
        AsyncStorage.setItem('customerId', userId);
          database().ref('CustomersConatct/' + userId).set({
            email:email,
            name:name,
            message:message,
            CustomerId:userId,
            
          
          })
          console.log("he")
        } }
    alert("Thanks for contacting us. We will reach you soon!!!!!")
}
   catch(error) {
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
            <Image   
                source={require('../assets/logo.png')}
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
                <Button   mode="contained" onPress={() => Contact()}>
                Contact
                 </Button>
            
            
            </View>
        
        </View>
        
    )
}
export default CustomerContactUs

const styles = StyleSheet.create({
    img:{
        //backgroundColor:"#667986",
        alignItems:"center",
        marginTop:5
    },
    container:{
        flex:1,
        marginHorizontal:25,
        backgroundColor:'#ffffff',
        justifyContent:"space-evenly",
    },
    text:{
        fontSize:26,
        fontWeight:"bold"
    },
    txtinput:{
        paddingHorizontal:30,
        height:'75%',
        justifyContent:"space-evenly"
    }
   
})
