import React,{useState} from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { TextInput, Button } from 'react-native-paper';

const CustomerContactUs=() =>{
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [feedback, setFeedback]=useState('')

    return (
        <View style={styles.container}>
             <View style={styles.img}>
            <Image   
                source={require('../assets/logo.png')}
            />
            <Text style={styles.text}>PROVIDE FEEDBACK</Text>
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
                label="Feedback"
                value={feedback}
                mode='outlined'
                numberOfLines={7}
                multiline={true}
                onChangeText={text => setFeedback(text)}
                />
                <Button   mode="contained" onPress={() => console.log('Pressed')}>
                Submit
                 </Button>
            
            
            </View>
        </View>
    )
}
export default CustomerContactUs

const styles = StyleSheet.create({
    img:{
        //backgroundColor:"#667986",
        alignItems:"center",
        marginTop:5
    },
    container:{
        flex:1,
        marginHorizontal:25,
        justifyContent:"space-evenly",
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
