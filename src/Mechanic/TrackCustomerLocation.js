import React, { Component } from "react";
import { View,  StyleSheet, Alert, Button } from "react-native";
import getDirections from 'react-native-google-maps-directions'
import Geolocation from "@react-native-community/geolocation";
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'
import database from '@react-native-firebase/database';


export default class TrackCustomerLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudes: 0,
      longitudes: 0,
      latitude: 33.5978689,
        longitude: 72.9883281,
      // name: this.props.route.params.name,
      // email: this.props.route.params.email,
      // expertise: this.props.route.params.expertise,
      // phone: this.props.route.params.phone,
      // MecahnicId: this.props.route.params.MecahnicId,


       coordinates: [],
      // CustomerName: '',
      // CustomerEmail: '',
      // CustomerPhone: '',
      // CustomerId: '',

    };
  }

  componentDidMount() {
    this.setState({
      longitude:this.state.longitude,
      latitude:this.state.latitude
    })
    //console.log(`this.props`, this.state.MecahnicId)

    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitudes: position.coords.latitude,
          longitudes: position.coords.longitude,
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
    //console.log("lat",this.state.latitude)
    Geolocation.watchPosition(
      position => {
        this.setState({
          latitudes: position.coords.latitude,
          longitudes: position.coords.longitude,
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
     // console.log(`this.props`, this.state.latitude)


  }



  handleGetDirections = () => {
    const data = {
      source: {
       latitude: this.state.latitudes,
       longitude: this.state.longitudes
      },
      destination: {
        latitude: 33.5978689,
        longitude: 72.9883281
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452,
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453,
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493,
        },
           {
          latitude: -33.8600046,
          longitude: 18.69743,
        },

      ]
    }
    

    getDirections(data)
  }

  render() {
    console.log("lat",this.state.latitude)
   
   
   // console.log("dest", destination)
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} 
        title="Get Directions" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      //  backgroundColor: "#C3E4ED",

    },
})
