import React,{ useState, useEffect } from 'react'
import { View , StyleSheet, Image } from 'react-native'
import { Button  } from 'react-native-paper';



const Firstscreen = ({navigation}) => {
    const  _navigateAdmin = async () => {
        navigation.navigate('AdminLogin');
        };
     const    _navigateCustomer = async () => {
        navigation.navigate('Customerlogin');
        };
      const  _navigateMechanic = async () => {
            navigation.navigate('Mechaniclogin');
            };


    return (
        <View style={styles.container}>
            <View style={styles.img}>
            <Image style={styles.img} 
                source={require('../src/assets/logo.png')}
            />

            </View>
             <View style={styles.button}> 
                <Button style={styles.button}  mode="contained"
                 onPress={() =>_navigateAdmin()}>
                login As Admin
                </Button>
                <Button  style={styles.button} mode="contained"
                 onPress={() =>_navigateMechanic()}>
                login As Mechanic
                </Button>
                <Button style={styles.button}  mode="contained"
                 onPress={() => _navigateCustomer()}>
                login As Customer
                </Button>
        </View>
  
  

        </View>
        
    )
  }
const styles = StyleSheet.create({
    container:{
         
        flex:1,
        alignItems:'center' ,
        justifyContent:'center',
        backgroundColor:"#ffffff"
       
       // backgroundColor:"#667986"

    },
    button:{
          padding:15,
         marginTop:50,
          
    },
    img:{
       // backgroundColor:"#667986",
        alignItems:"center"
    }
    
})
export default Firstscreen;
