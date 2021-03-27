import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';


const AddSpareParts = () => {
    const [name, setName]=useState('')
    const [desc, setDesc]=useState('')
    const [Price, setPrice]=useState('')
     

    return (
        <View style={styles.container}>
            <Text style={styles.text}> ADD SPARE PARTS </Text>
            <TextInput
                label="Name"
                value={name}
                mode='outlined'
                onChangeText={text => setName(text)}
                />
            
            <TextInput
                label="Description about Spare Parts"
                value={desc}
                mode='outlined'
                numberOfLines={6}
                multiline={true}
                onChangeText={text => setDesc(text)}
                />
                <TextInput
                label="Price"
                value={Price}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={text => setPrice(text)}
                />
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Upload Image
                </Button>
                <Button   mode="contained" onPress={() => console.log('Pressed')}>
                 Add Spare Parts
                 </Button>
            
            
        </View>
    )
}

export default AddSpareParts

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:40,
        justifyContent:"space-evenly",
        
    },
    text:{
        fontSize:29,
        textAlign:"center"
    },
    
})
