import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';


const EditMechanic = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [location, setLocation]=useState('')
    const [phone, setPhone]=useState('')
    const [expertise, setExperise]=useState('')
   
    
     

    return (
        <View style={styles.container}>
            <Text style={styles.text}> EDIT MECHANIC </Text>
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
                onChangeText={text => setLocation(text)}
                />
                <TextInput
                label="Phone"
                value={phone}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setPhone(text)}
                />
                <TextInput
                label="Expertise"
                value={expertise}
                mode='outlined'
                numberOfLines={7}
                onChangeText={text => setExperise(text)}
                />
                
                
                <Button   mode="contained" onPress={() => console.log('Pressed')}>
                 Edit Profile
                 </Button>
            
            
        </View>
    )
}

export default EditMechanic

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
