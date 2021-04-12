import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import database from '@react-native-firebase/database'


const EditCustomer = ({ route }) => {
    const [CustomerId, setCustomerId]=useState(route.params.paramKey.CustomerId)
    const [name, setName]=useState(route.params.paramKey.name)
    const [email, setEmail]=useState(route.params.paramKey.email)
    const [address, setAddress]=useState(route.params.paramKey.address)
    const [phone, setPhone]=useState(route.params.paramKey.phone)

    const updateData =()=>{
        database()
        .ref('Customers/'+CustomerId)
        .update({
            name: name,
            email: email,
            address: address,
            phone: phone,
        })
        .then(() => alert("Profile Updated")
        );
      
    }

useEffect(() => {
   console.log(`{route.params.paramKey}`, route.params.paramKey.name)
   
  },[]);
     

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
                label="Address"
                value={address}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setAddress(text)}
                />
                <TextInput
                label="Phone"
                value={phone}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setPhone(text)}
                />
                
                <Button   mode="contained" onPress={() => updateData()}>
                 UPDATE
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
