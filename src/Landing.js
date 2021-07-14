import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('./assets/txtl.png')} />
            <View>
                <Image style={styles.imgease}
                    source={require('./assets/ease.png')}
                />
            </View>
            <View>
                <Image style={styles.imgease}
                    source={require('./assets/bgimage3.png')}
                />

            </View>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <Text style={styles.txt} >Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#C3E4ED"


    },
    img: {
        marginTop: 50,
        justifyContent: "center",
    },

    btn: {
        marginBottom: 36,
        width: '60%',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        opacity: 1,

        height: "10%",
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 10,
        borderColor: "#000000",
        borderWidth: 1,
        backgroundColor: "#C2185B",
        elevation: 10,
        shadowOpacity: 50,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }




    },
    txt: {
        fontSize: 22,
        fontFamily: "StrickenBrush-D9a3",
        color: "#ffffff"

    },
    imgease: {
        marginTop: 10

    },
})
