import React,{useState} from 'react'
import { Text, View, StyleSheet, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'
import database from '@react-native-firebase/database';


const CustomerLogin = ({navigation}) => {
 // console.log(`navigation from customer`, navigation)
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const  getCustomerRole = async() => {
      AsyncStorage.getItem("CustomerId") 
        .then((result) =>
    
            database()
            .ref("Customers/" + result )
            .on("value", (snapshot) => {
              if (snapshot.exists()) {
                var isCustomer = snapshot.child("Customer").val();
                console.log("Is user a Customer?" + isCustomer);
                console.log(snapshot.val());
                if (isCustomer) {
                 // this.goToMaps();
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
      AsyncStorage.setItem("CustomerId", auth().currentUser.uid);
      getCustomerRole();
      

      //  this.props.navigation.navigate("Maps");
    },
    (error) => {
      //this.toast.show("error:" + error.message, 500);
      console.log(error)
      
    }
    
  ) ;
  
  //getCustomerRole();

};



       



 // };
 
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
