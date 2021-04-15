import React,{useState} from 'react'
import {     Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';



const MechanicLogin = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')



    const  getMechanicRole = async() => {
      AsyncStorage.getItem("MechanicId") 
        .then((result) =>
    
            database()
            .ref("Mecahnic/" + result )
            .on("value", (snapshot) => {
              if (snapshot.exists()) {
                var isMechanic = snapshot.child("Mechanic").val();
                console.log("Is user a Mechanic?" + isMechanic);
                console.log(snapshot.val());
                if (isMechanic) {
                 // this.goToMaps();
                navigation.navigate("MechanicHome")
                }
              } else {
                Alert.alert(
                  "Alert",
                  "This user is not registered as a Mechanic",
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
  


  //   const  _VerifyAsync = async () => {
  //       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  //       if(email.trim() === ""  || password.length=='')
  //       {
  //         alert("All inputs must be filled!");
  //         return;
  //       }
  //       if(reg.test(email) === false){
  //         alert("INVALID EMAIL!");
  //         return ;
  //       }
  //       const userToken1= await AsyncStorage.getItem('MechanicId');

  
  //       auth()
  // .signInWithEmailAndPassword(email,password.toString())
  // .then(() => {
  //   console.log('User signed in ');
  //   navigation.navigate('MechanicHome')
  // })
  // .catch(error => {
  //   if (error.code === 'auth/operation-not-allowed') {
  //     console.log('Enable anonymous in your firebase console.');
  //   }

  //   console.error(error);
  // });
       


  // };








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

//       auth()
// .signInWithEmailAndPassword(email,password.toString())
// .then(() => {
//  getCustomerRole();

//   console.log('User signed in ');
// //  navigation.navigate('CustomerHome')
// })
// .catch(error => {
//   if (error.code === 'auth/operation-not-allowed') {
//     console.log('Enable anonymous in your firebase console.');
//   }

//   console.error(error);
// }
// //getCustomerRole();
// );


auth()
.signInWithEmailAndPassword(email, password)
.then(
() => {
  AsyncStorage.setItem("MechanicId", auth().currentUser.uid);
  getMechanicRole();
  

  //  this.props.navigation.navigate("Maps");
},
(error) => {
  //this.toast.show("error:" + error.message, 500);
  console.log(error)
  
}

) ;

//getCustomerRole();

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
            <TouchableOpacity onPress={()=>navigation.navigate("MechanicSignup")}
        style={styles.navButton}
        >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity> 
            

            
            </View>


            
         </View>
    )
}

export default MechanicLogin

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
    navButton: {
        marginTop: 15,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
})
