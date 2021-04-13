import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Landing = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
            <Image style={styles.img}  
                source={require('./assets/logo.png')}
            /> 
            </View>
            <View style={styles.btn}>
                <TouchableOpacity   onPress={() => navigation.navigate('First')}>
                    <Text style={styles.txt} >Get Started</Text>
                </TouchableOpacity>
            </View>
            
         </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
         backgroundColor:"#FFFFFF"
         

    },
    img:{
        marginTop:50,
        justifyContent :"center"
     },
     btn:{
          marginBottom:36,
        width: '100%', 
        justifyContent: 'center', 
        position: 'absolute',
        bottom: 0,
       
        height:"12%",
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        marginHorizontal:10,
        elevation:3,
        borderColor:"#000000",
        borderWidth:1.5

  

     },
     txt:{
         fontSize:30
     }
})
