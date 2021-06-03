import React, { Component , useState} from "react";
import { View,  StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
//import getDirections from 'react-native-google-maps-directions'
import Geolocation from "@react-native-community/geolocation";
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'
import database from '@react-native-firebase/database';
import MapViewDirections from 'react-native-google-maps-directions';

const TrackCustomerLocation=()=>{
  const [coordinates] = useState([
    {
      latitude: 33.5978689,
      longitude: 72.9883281,
    },
    {
      latitude:33.5978689,
      longitude: 72.9883281,
    },
  ]);  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
        apikey={"AIzaSyDN1hxa44LSQSWhv3O61wRuvSxbtmNW2qc"} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
})


export default TrackCustomerLocation;