import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';




const MechanicHome = ({ navigation }) => {


  const [name, setName] = useState('')

  const details = () => {
    var currentUser = auth().currentUser
    database().ref(`Mecahnic`).child(currentUser.uid).on('value', (data) => {
      let name1 = data.child('name').val();
      setName(name1);

    })

  }
  useEffect(() => {
    details()
    return () =>
      console.log("warning")
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={require('../assets/txtl.png')} />

        <Image style={{ marginTop: 10 }}
          source={require('../assets/ease.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{
          fontFamily: 'StrickenBrush-D9a3',
          fontSize: 25, marginTop: 30, color: '#DC143C', marginLeft: 40
        }}>
          WELCOME :</Text>
        <Text style={{
          fontFamily: 'StrickenBrush-D9a3',
          fontSize: 25, marginTop: 30, color: '#DC143C'
        }}>{name}</Text>
      </View>


      {/* top views container and styles */}

      <View style={styles.sparepartsMainContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable} onPress={() => navigation.navigate('ViewRequest')}>
            <Icon name="notebook-outline" style={styles.iconreq} size={50} />

            <Text style={styles.buySparePartsStyle}>VIEW REQUEST</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}
            onPress={() => navigation.navigate('MechanicProfile')}

          >
            <Icon2 name="man-outline" style={styles.iconprof} size={50} />

            <Text style={styles.callMachineStyle}>VIEW PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*end of top views container and styles */}

      {/*start of inner views container and styles */}
      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer1}>
          <TouchableOpacity style={styles.buyPartsTouchable}
            onPress={() => navigation.navigate('MechanicContactUs')}
          >
            <Icon3 name="headphones" style={styles.icon2} size={50} />

            <Text style={styles.buySparePartsStyle}>CONTACT US</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer2}>
          <TouchableOpacity style={styles.callMachineTouchable}
            onPress={() => navigation.navigate('MechanicAddSpareParts')}
          >
            <Icons name="handyman" style={styles.icon} size={50} />


            <Text style={styles.callMachineStyle}> Add Spare Parts</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*end of inner views container and styles */}

      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer2}>
          <TouchableOpacity style={styles.buyPartsTouchable} onPress={() => navigation.navigate('MechanicAboutUs')} >
            <Icon2 name="md-people-circle-outline" style={styles.icon2} size={50} />

            <Text style={styles.buySparePartsStyle}>About Us</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};

export default MechanicHome

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#C3E4ED",


  },
  imageContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  sparepartsMainContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  buySparePartsContainer: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BAD80A',

    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 100, height: 30 }


  },
  buySparePartsContainer1: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC61E',
    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }



  },
  buySparePartsContainer2: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AC8',
    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }



  },
  icon: {
    color: "#ffffff",
    marginLeft: 15,
    marginBottom: 5,

  },
  icon2: {
    color: "#ffffff",
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 35,

  },
  iconreq: {
    color: "#ffffff",
    marginLeft: 30,
    marginBottom: 5,
    fontSize: 40,

  },
  iconprof: {
    color: "#ffffff",
    marginLeft: 30,
    marginBottom: 5,
    fontSize: 40,

  },






  callMachineContainer: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2185B',
    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }



  },
  callMachineContainer1: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BCD4',
    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }


  },
  callMachineContainer2: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#725a7a',
    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }


  },

  //=========================Ends of container========
  logoImageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  buyPartsTouchable: {
    justifyContent: 'center'
  },
  callMachineTouchable: {
    justifyContent: 'center'
  },
  buySparePartsStyle: {
    //fontSize: 12,
    fontFamily: "StrickenBrush-D9a3",
    fontSize: 18,
    color: "#fff"

  },
  callMachineStyle: {
    fontSize: 18,

    fontFamily: "StrickenBrush-D9a3",
    color: "#ffffff",
    elevation: 50



  },
  //================end of top views container and styles 

  provideFeedBackContainer: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-evenly',
  },
  img: {

    alignItems: "center",
    marginTop: 60,
  },



})
