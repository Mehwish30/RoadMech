import React,{ useState, useEffect } from 'react'
import { View , StyleSheet, Image } from 'react-native'
import { Button  } from 'react-native-paper';
//import { NavigationContainer } from '@react-navigation/native';



const Firstscreen = ({navigation}) => {

    useEffect(() => {
       // console.log(`this.props.navigation.navigate`, this.props)
     
      });

    return (
        <View style={styles.container}>
            <View style={styles.img}>
            <Image style={styles.img} 
                source={require('../src/assets/logo.png')}
            />

            </View>
             <View style={styles.button}> 
                <Button style={styles.button}  mode="contained"
                 onPress={() =>navigation.navigate('AdminLogin')}>
                login As Admin
                </Button>
                <Button  style={styles.button} mode="contained"
                 onPress={() =>navigation.navigate('Mechaniclogin')}>
                login As Mechanic
                </Button>
                <Button style={styles.button}  mode="contained"
                 onPress={() => navigation.navigate('Customerlogin')}>
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
