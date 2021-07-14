import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'
import database from '@react-native-firebase/database';


export default class CallMechanicHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      name: this.props.route.params.name,
      email: this.props.route.params.email,
      expertise: this.props.route.params.expertise,
      phone: this.props.route.params.phone,
      MecahnicId: this.props.route.params.MecahnicId,


      coordinates: [],
      CustomerName: '',
      CustomerEmail: '',
      CustomerPhone: '',
      CustomerId: '',

    };
  }
  componentDidMount() {
    console.log(`this.props`, this.state.MecahnicId)

    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );
    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0
      }
    );
    //  console.log(`this.props`, this.state.latitude)


  }


  render() {

    var currentUser = auth().currentUser
    database().ref(`Customers`).child(currentUser.uid).on('value', (data) => {
      this.setState({
        CustomerName: data.child('name').val(),
        CustomerPhone: data.child('phone').val(),
        CustomerEmail: data.child('email').val(),
        CustomerId: data.child('CustomerId').val(),



      })
    })
    //  console.log(`this.name`, this.state.CustomerName)

    const request = () => {
      try {
        if (auth().currentUser) {
          let userId = auth().currentUser.uid;
          if (userId) {
            AsyncStorage.setItem('CustomerId', userId);
            database().ref('Service_Request/' + userId + "/").set({
              MechanicName: this.state.name,
              MechanicPhone: this.state.phone,
              MechanicEmail: this.state.phone,
              Mecahnicaddress: this.state.address,
              CustomerId: this.state.CustomerId,
              CustomerName: this.state.CustomerName,
              CustomerEmail: this.state.CustomerEmail,
              CustomerPhone: this.state.CustomerPhone,
              // CustomerLocation:this.state.coordinates,
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              MecahnicId: this.state.MecahnicId



            })
            //console.log("he")
          }
        }
        alert("Request forwarded to your Mechanic")
      }
      catch (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      }
    }


    //console.log('Mechanic:', this.state.MechanicId)

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}>
          </Marker>
          <Polyline
            coordinates={this.state.coordinates}
            strokeColor="#bf8221"
            strokeColors={['#bf8221', '#ffe066', '#ffe066', '#ffe066', '#ffe066',]}
            strokeWidth={3}
          />

        </MapView>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => request()}>
            <Text style={styles.txt} >Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 22,
    fontFamily: "StrickenBrush-D9a3",
    color: "#ffffff",

    paddingTop: 10,
    borderRadius: 30,

  },
  btn: {
    marginTop: 60,
    backgroundColor: "red",
    height: "9%",
    // width:"50%",
    marginHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2185B',

    elevation: 10,
    shadowOpacity: 90,
    shadowColor: '#000000',
    shadowRadius: 25,
    shadowOffset: { width: 100, height: 30 }


  }

})
