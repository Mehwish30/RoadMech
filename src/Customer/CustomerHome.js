import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'

const CustomerHome = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            source={require('../assets/logo.png')}
          />
        </View>
           <View style={styles.div}>
            <View style={styles.firstrow}>
              <TouchableOpacity
                style={styles.button}
              //onPress={onPress}
              >
                <Text style={styles.txt}>Buy Spare Parts</Text>

              </TouchableOpacity>
            </View>
            <View style={styles.firstrow}>

              <TouchableOpacity
                style={styles.button}
              //onPress={onPress}
              >
                <Text style={styles.txt}>Call Mechanic</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.div}>
            <View style={styles.secondrow}>
              <TouchableOpacity
                style={styles.button}
              //onPress={onPress}
              >
                <Text style={styles.txt}>Provide Feedback</Text>

              </TouchableOpacity>
            </View>
            <View style={styles.secondrow}>

              <TouchableOpacity
                style={styles.button}
              //onPress={onPress}
              >
                <Text style={styles.txt}>View Profile</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.d}>
            <View style={styles.secondrow}>
              <TouchableOpacity
                style={styles.button}
              //onPress={onPress}
              >
                <Text style={styles.txt}>Provide Feedback</Text>

              </TouchableOpacity>
            </View>
            <View style={styles.secondrow}>

              <TouchableOpacity
                style={styles.button}
              //onPress={onPress}
              >
                <Text style={styles.txt}>View Profile</Text>
              </TouchableOpacity>
            </View>

          </View>
 
      </View>
    </ScrollView>
  )
}

export default CustomerHome

const styles = StyleSheet.create({
  container: {
     flex: 1,
      justifyContent:"space-evenly",
      marginVertical: 0,

  },
  firstrow: {
    borderRadius: 20,
     // flex:3,
    marginTop: 20,
    backgroundColor: "#007AC8",
    width: "30%",
    //alignItems:"flex-start",
    height: "30%",
    marginHorizontal: 30,
    marginVertical: 30,

    marginBottom:0,
    flexDirection: "row",
     margin : 6,
    paddingBottom:10,
    //flex: 1,



  },
  txt: {
    textAlign: "center",
   // marginTop: 29,
    justifyContent: "center",
    fontSize: 19,
    fontWeight: "bold"
  },
  img: {
    //backgroundColor:"#667986",
    alignItems: "center",
    marginTop: 10
  },
  div: {
    // backgroundColor:"#667986",
    // margin:10,
    flexDirection: "row",
    justifyContent: "center",
    height: 350,
    width: 400,
    //width:"70%",
   // marginTop: 5,
      marginBottom:15



  },
  d: {
    flexDirection: "row",
    justifyContent: "center",
    height: 350,
    width: 400,
   // marginTop: 5,
    padding: 5,
    //justifyContent:"space-between"
    marginBottom:0,


  },
  secondrow: {
     // marginBottom: 600,
    borderRadius: 20,
    // flex:3,
    // marginTop: 20,
    backgroundColor: "#007AC8",
    width: "30%",
    //alignItems:"flex-start",
    height: "30%",
    marginHorizontal: 30,
    flexDirection: "row",
    //marginTop: 20
    position:"relative",
    //flex: 1, 
   // margin : 6,
   marginVertical: 0,


  },
  button: {
    elevation: 5,
    // borderWidth: 1,
    // padding: 25,
    // borderColor: 'black'

  },

})
