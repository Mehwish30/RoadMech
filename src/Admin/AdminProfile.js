import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICon from 'react-native-vector-icons/MaterialIcons';


const AdminProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
            <Image style={styles.img}
                    source={require('../assets/profile.jpg')}
                />
            <Text style={styles.txt}>Admin</Text>
            </View>
            <View style={styles.Touchcontainer}>
                <TouchableOpacity style={styles.topacity}>
                <Icon name="phone" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>678654</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.topacity}>
                <Icon name="email" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>admin@gmail.com</Text>
                </TouchableOpacity>
                {/**<TouchableOpacity style={styles.topacity}>
                <ICon name="place" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.text}>Adminaddress</Text>
                </TouchableOpacity>
    **/}
                <TouchableOpacity style={styles.topacitylogout}>
                <ICon name="logout" style={styles.icon}size={30} color="#000000"  />

                    <Text style={styles.textlogou}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdminProfile

const styles = StyleSheet.create({
    imgcontainer:{
        borderRadius:28,
       // backgroundColor:"red",
        height:"26%",
        marginTop:4,
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
        backgroundColor:"#fff"
    },
    txt:{
        fontSize:30,
        //padding:10
        marginTop:6
    },
    Touchcontainer:{
        marginTop:30,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    topacity: {
        width: "100%",
        height:"22%",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        //shadowOpacity:1
        flexDirection:"row",

    },
    topacitylogout: {
        width: "90%",
        height:"18%",
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
    }
    
    

})
