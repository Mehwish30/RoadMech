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
        // justifyContent:"flex-end",
          marginBottom:36,
        // backgroundColor:"red"
        width: '100%', 
        height: 50, 
        backgroundColor: '#e0e0e0', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderRadius:12,
        marginHorizontal:30
  

     },
     txt:{
         fontSize:30
     }
})
