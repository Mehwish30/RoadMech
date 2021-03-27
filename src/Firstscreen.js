import React from 'react'
import { View , StyleSheet, Image } from 'react-native'
import { Button  } from 'react-native-paper';


const Firstscreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
            <Image style={styles.img} 
                source={require('../src/assets/logo.png')}
            />

            </View>
             <View style={styles.button}> 
                <Button style={styles.button}  mode="contained" onPress={() => console.log('Pressed')}>
                login As Admin
                </Button>
                <Button  style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                login As Mechanic
                </Button>
                <Button style={styles.button}  mode="contained" onPress={() => console.log('Pressed')}>
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
