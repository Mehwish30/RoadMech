import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'

const AdminHome = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImageStyle}
        />
      </View>

      {/* top views container and styles */}

      <View style={styles.sparepartsMainContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}
          onPress={() => navigation.navigate('AddSpareParts')}

          >
            <Text style={styles.buySparePartsStyle}>ADD SPARE PARTS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}
          onPress={() => navigation.navigate('Mechanic')}
          >
            <Text style={styles.callMachineStyle}>MECHANICS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*end of top views container and styles */}

      {/*start of inner views container and styles */}
      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}
          onPress={() => navigation.navigate('ViewFeedback')}
          >
            <Text style={styles.buySparePartsStyle}>FEEDBACK</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}
          onPress={() => navigation.navigate('Customer')}
          >
            <Text style={styles.callMachineStyle}> CUSTOMERS</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*end of inner views container and styles */}

      {/*start of last views container and styles */}

       <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}
          onPress={() => navigation.navigate('AdminProfile')}
          >
            <Text style={styles.buySparePartsStyle}>PROFILE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}
          onPress={() => navigation.navigate('ViewContact')}
          >
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
    backgroundColor:"#FFFFFF"

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
    backgroundColor: '#e0e0e0',
   // marginBottom:19

},
callMachineContainer: {
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0'

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
    fontSize: 12
},
callMachineStyle: {
    fontSize: 12
},
//================end of top views container and styles 

provideFeedBackContainer: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-evenly',
}


})
