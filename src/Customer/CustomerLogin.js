import React,{useState} from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'


const CustomerLogin = ({navigation}) => {
 // console.log(`navigation from customer`, navigation)
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
    console.log('User signed in anonymously');
    navigation.navigate('CustomerHome')
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
       

{/**auth().signInWithEmailAndPassword(email, password)
.then(()=>{
    if (auth().currentUser) {
      navigation.navigate("CustomerHome")
    }
    
  }).catch(function(error) {
    //Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Register!');
      console.log(error);
  })
  
}
**/}




  };
  
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
            <TouchableOpacity onPress={()=>navigation.navigate("CustomerSignup")}>
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
