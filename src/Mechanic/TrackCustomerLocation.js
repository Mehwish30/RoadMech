

import React,{useState, Component} from 'react';
import {StyleSheet, View, Dimensions, Text,Button, Alert} from 'react-native';
import MapView,{Marker,Polyline,PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { OpenMapDirections } from 'react-native-navigation-directions';
import Geolocation from "@react-native-community/geolocation";



export default class TrackCustomerLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      CustomerLatitude: this.props.route.params.CustomerLatitude,
      CustomerLongitude: this.props.route.params.CustomerLongitude,
     
     
      coordinates:[],
    };
  }  
  componentDidMount() {
    console.log("custlon", this.state.CustomerLatitude)
    console.log("custlan", this.state.CustomerLongitude)
   
   
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            
          })
        });
        console.log(`this.props.long`, this.state.longitude)
        console.log(`this.props.long`, this.state.latitude)


      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: false,
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
        Alert.alert(error.message.toString());
 
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0
      },
      console.log(`this.props`, this.state.latitude)


    );
    //  console.log(`this.props`, this.state.latitude)


  }

  _callShowDirections = () => {
    const startPoint = {
      longitude: this.state.longitude,
      latitude: this.state.latitude
    } 

    const endPoint = {
      longitude: this.state.CustomerLongitude,
      latitude: this.state.CustomerLatitude
    }

	const transportPlan = 'w';

    OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
      console.log(res)
    });
  }  
  render() {
  return (
    <View style={styles.container}>
        <Text>Show Location</Text>
        <Button
        onPress={() => {this._callShowDirections() }}
        title="Track Location"
        color="#841584"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
//export default TrackCustomerLocation;
