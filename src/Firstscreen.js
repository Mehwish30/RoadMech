import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'




const Firstscreen = ({ navigation }) => {
    const _navigateAdmin = async () => {
        navigation.navigate('AdminLogin');
    };
    const _navigateCustomer = async () => {
        navigation.navigate('Customerlogin');
    };
    const _navigateMechanic = async () => {
        navigation.navigate('Mechaniclogin');
    };


    return (
        <View style={styles.container}>

            <View style={styles.imgcon}>
                <Image style={styles.img} source={require('./assets/txtl.png')} />

                <Image style={styles.imgease}
                    source={require('./assets/ease.png')}
                />


            </View>


            <View style={styles.opwidth} >
                <Image style={styles.bg} source={require('./assets/bgimage3.png')} />
                <TouchableOpacity style={styles.btnlog} onPress={() => _navigateAdmin()}>
                    <Text style={styles.txt}>LOGIN ADMIN</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.btnlog} onPress={() => _navigateCustomer()}>
                    <Text style={styles.txt}>LOGIN CUSTOMER</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnlog} onPress={() => _navigateMechanic()}>
                    <Text style={styles.txt}>LOGIN MECHANIC</Text>

                </TouchableOpacity>

            </View>



        </View>

    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,

        justifyContent: 'center',
        backgroundColor: "#C3E4ED"


    },


    btnlog: {
        padding: 20,
        marginTop: 18,
        // opacity:1,
        elevation: 23,
        shadowOpacity: 12,
        justifyContent: "space-evenly",
        height: "17%",
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 10,
        borderColor: "#000000",
        borderWidth: 1.5,
        backgroundColor: "#C2185B",
        elevation: 10,
        shadowOpacity: 50,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 },
        marginLeft: 70


    },
    txt: {
        fontSize: 22,
        fontFamily: "StrickenBrush-D9a3",
        color: '#ffffff'

    },
    img: {
        marginLeft: 40,
        marginBottom: 50

    },
    imgcon: {
        height: 180,
        // marginLeft:15
    },
    opwidth: {
        width: "80%",
    },
    imgease: {
        marginLeft: 70,
        marginTop: 60,
        position: 'absolute'


    },
    bg: {
        position: 'absolute',
        resizeMode: "cover",
        height: '120%',
        width: '140%',
        marginBottom: 90,

    }
})
export default Firstscreen;
