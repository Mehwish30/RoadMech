import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Elevations from 'react-native-elevation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';


const AdminHome = ({ navigation }) => {

  const [name, setName] = useState('')

  const details = () => {
    var currentUser = auth().currentUser
    database().ref(`Admin`).child(currentUser.uid).on('value', (data) => {
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

        <Image style={styles.ease}
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
        }}>Faizan</Text>
      </View>

      {/* top views container and styles */}

      <View style={styles.sparepartsMainContainer}>

        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}
            onPress={() => navigation.navigate('AddSpareParts')}

          >
            <Icons name="handyman" style={styles.icon} size={50} />

            <Text style={styles.buySparePartsStyle}>SPARE PARTS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}
            onPress={() => navigation.navigate('Mechanic')}
          >
            <Icons name="engineering" style={styles.icon} size={50} />

            <Text style={styles.callMachineStyle}>MECHANICS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*end of top views container and styles */}

      {/*start of inner views container and styles */}
      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer1}>
          <TouchableOpacity style={styles.buyPartsTouchable}
            onPress={() => navigation.navigate('ViewFeedback')}
          >
            <Icon name="book-open-page-variant" style={styles.icon} size={50} />

            <Text style={styles.buySparePartsStyle}>FEEDBACK</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer1}>
          <TouchableOpacity style={styles.callMachineTouchable}
            onPress={() => navigation.navigate('Customer')}
          >
            <Icon2 name="people-outline" style={styles.icon} size={50} />

            <Text style={styles.callMachineStyle}> CUSTOMERS</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*end of inner views container and styles */}

      {/*start of last views container and styles */}

      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer2}>
          <TouchableOpacity style={styles.buyPartsTouchable}
            onPress={() => navigation.navigate('AdminProfile')}
          >
            <Icon2 name="man-outline" style={styles.icon2} size={50} />

            <Text style={styles.buySparePartsStyle}>PROFILE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer2}>
          <TouchableOpacity style={styles.callMachineTouchable}
            onPress={() => navigation.navigate('ViewContact')}
          >
            <Icon1 name="call-in" style={styles.icon2} size={50} />

            <Text style={styles.callMachineStyle}>CONTACT</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/*end of last views container and styles */}
    </View>
  );
};

export default AdminHome

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#C3E4ED",


  },
  imageContainer: {
    flex: 0.25,
    alignItems: 'center',
  },
  sparepartsMainContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20


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
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  buyPartsTouchable: {
    justifyContent: 'center',
    ...Elevations[4],
  },
  callMachineTouchable: {
    justifyContent: 'center',
    elevation: 50,
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
  ease: {
    marginLeft: 10,
    marginTop: 10
  },
  img: {

    alignItems: "center",
    marginTop: 70,
  },
  icon: {
    color: "#ffffff",
    marginLeft: 19,
    marginBottom: 5,
    //fontSize:40,

  },
  icon2: {
    color: "#ffffff",
    marginLeft: 1,
    marginBottom: 5,
  }


})
