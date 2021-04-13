import React,{useState} from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { TextInput, Button } from 'react-native-paper';

const MechanicContactUs=() =>{
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [message, setMessage]=useState('')

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
                <Button   mode="contained" onPress={() => console.log('Pressed')}>
                Contact
                 </Button>
            
            
            </View>
        </View>
    )
}
export default MechanicContactUs

const styles = StyleSheet.create({
    img:{
        //backgroundColor:"#667986",
        alignItems:"center",
        marginTop:5,

    },
    container:{
        flex:1,
        marginHorizontal:25,
        justifyContent:"space-evenly",
        backgroundColor:"#ffffff"
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
