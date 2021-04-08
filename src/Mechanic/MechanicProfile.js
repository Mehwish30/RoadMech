import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICon from 'react-native-vector-icons/MaterialIcons';


const MechanicProfile = () => {
    return (
        
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
            <Image style={styles.img}
                    source={require('../assets/profile.jpg')}
                />
            <Text style={styles.txt}>Mechanic</Text>
            
            </View>
            <View style={styles.conabout}>
            <Text style={styles.txtabout}>
                I have more than 10 years of experience in repairing cars. 
                i have done degee in this field. I have done many diplomas.</Text>


            </View>
            
            <View style={styles.Touchcontainer}>
                <TouchableOpacity style={styles.topacity}>
                <Icon name="phone" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>678654</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacity}>
                <Icon name="email" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>mechanic@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacity}>
                <ICon name="place" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>mechanic address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacitylogout}>
                <ICon name="logout" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.textlogou}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
       
    )
}

export default MechanicProfile

const styles = StyleSheet.create({
    imgcontainer:{
        borderRadius:28,
       // backgroundColor:"red",
        height:"22%",
        //marginTop:4,
        alignItems:"center",
        //justifyContent:"space-evenly"

    },
    img:{
        width:"30%",
        height:"90%",
        borderRadius:70,
        //marginLeft:70
        alignItems:"center"

    },
    container:{
        flex:1,
        //backgroundColor:"#e0e0e0"
        backgroundColor:"#fff"
    },
    txt:{
        fontSize:28,
        //padding:10
        marginTop:6,
        fontWeight:"bold"
    },
    Touchcontainer:{
        marginTop:2,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    topacity: {
        width: "100%",
        height:"15.5%",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        //shadowOpacity:1
        flexDirection:"row",

    },
    topacitylogout: {
        width: "90%",
        height:"16%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003F87',
        //shadowOpacity:1
        flexDirection:"row",
        marginHorizontal:30
    },
    
    text:{
        fontSize:22
    },
    textlogou:{
        fontSize:22,
        
    },
    icon:{
        marginRight:11
    },
    txtabout:{
        fontSize:22,

    },
    conabout:{
        marginTop:32,
        marginHorizontal:10
    }
    
    

})
