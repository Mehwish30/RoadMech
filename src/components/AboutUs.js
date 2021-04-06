import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

export default function AboutUs() {
    return (
        <View>
            <View style={styles.img}>
            <Image   
                source={require('../assets/logo.png')}
            />
            

            </View>
             <Text>about</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        //backgroundColor:"#667986",
        alignItems:"center",
        marginTop:20
    },
})
