import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';


const EditCustomer = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [location, setLocation]=useState('')
    const [phone, setPhone]=useState('')
    
     

    return (
        <View style={styles.container}>
            <Text style={styles.text}> EDIT CUSTOMER </Text>
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
                multiline={true}
                onChangeText={text => setEmail(text)}
                />
                <TextInput
                label="Location"
                value={location}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setLocation(text)}
                />
                <TextInput
                label="Phone"
                value={phone}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setPhone(text)}
                />
                
                <Button   mode="contained" onPress={() => console.log('Pressed')}>
                 Edit Profile
                 </Button>
            
            
        </View>
    )
}

export default EditCustomer

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:40,
        justifyContent:"space-evenly",
        
    },
    text:{
        fontSize:29,
        textAlign:"center",
        fontWeight:"bold"
    },
    
})
