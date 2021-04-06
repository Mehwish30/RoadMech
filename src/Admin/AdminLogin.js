import React,{useState} from 'react'
import {     Text, View, StyleSheet, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper';


const AdminLogin = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

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
             <Button   mode="contained" onPress={() => navigation.navigate('AdminHome')}>
                 LogIn
            </Button>   
            
            </View>


            
         </View>
    )
}

export default AdminLogin

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
    }
})
