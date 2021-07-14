// // import React, { Component } from "react";
// // import { View,  StyleSheet, Alert, Button } from "react-native";
// // import getDirections from 'react-native-google-maps-directions'
// // import Geolocation from "@react-native-community/geolocation";
// // import auth from '@react-native-firebase/auth'
// // import AsyncStorage from '@react-native-community/async-storage'
// // import database from '@react-native-firebase/database';


// // export default class TrackCustomerLocation extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       latitudes: 0,
// //       longitudes: 0,
// //       latitude: 33.5978689,
// //         longitude: 72.9883281,
// //       // name: this.props.route.params.name,
// //       // email: this.props.route.params.email,
// //       // expertise: this.props.route.params.expertise,
// //       // phone: this.props.route.params.phone,
// //       // MecahnicId: this.props.route.params.MecahnicId,


// //        coordinates: [],
// //       // CustomerName: '',
// //       // CustomerEmail: '',
// //       // CustomerPhone: '',
// //       // CustomerId: '',

// //     };
// //   }

// //   componentDidMount() {
// //     this.setState({
// //       longitude:this.state.longitude,
// //       latitude:this.state.latitude
// //     })
// //     //console.log(`this.props`, this.state.MecahnicId)

// //     Geolocation.getCurrentPosition(
// //       position => {
// //         this.setState({
// //           latitudes: position.coords.latitude,
// //           longitudes: position.coords.longitude,
// //           coordinates: this.state.coordinates.concat({
// //             latitude: position.coords.latitude,
// //             longitude: position.coords.longitude
// //           })
// //         });
// //       },
// //       error => {
// //         Alert.alert(error.message.toString());
// //       },
// //       {
// //         showLocationDialog: true,
// //         enableHighAccuracy: true,
// //         timeout: 20000,
// //         maximumAge: 0
// //       }
// //     );
// //     //console.log("lat",this.state.latitude)
// //     Geolocation.watchPosition(
// //       position => {
// //         this.setState({
// //           latitudes: position.coords.latitude,
// //           longitudes: position.coords.longitude,
// //           coordinates: this.state.coordinates.concat({
// //             latitude: position.coords.latitude,
// //             longitude: position.coords.longitude
// //           })
// //         });
// //       },
// //       error => {
// //         console.log(error);
// //       },
// //       {
// //         showLocationDialog: true,
// //         enableHighAccuracy: true,
// //         timeout: 20000,
// //         maximumAge: 0,
// //         distanceFilter: 0
// //       }
// //     );
// //      // console.log(`this.props`, this.state.latitude)


// //   }



// //   handleGetDirections = () => {
// //     const data = {
// //       source: {
// //        latitude: this.state.latitudes,
// //        longitude: this.state.longitudes
// //       },
// //       destination: {
// //         latitude: 33.5978689,
// //         longitude: 72.9883281
// //       },
// //       params: [
// //         {
// //           key: "travelmode",
// //           value: "driving"        // may be "walking", "bicycling" or "transit" as well
// //         },
// //         {
// //           key: "dir_action",
// //           value: "navigate"       // this instantly initializes navigation using the given travel mode
// //         }
// //       ],
// //       waypoints: [
// //         {
// //           latitude: -33.8600025,
// //           longitude: 18.697452,
// //         },
// //         {
// //           latitude: -33.8600026,
// //           longitude: 18.697453,
// //         },
// //            {
// //           latitude: -33.8600036,
// //           longitude: 18.697493,
// //         },
// //            {
// //           latitude: -33.8600046,
// //           longitude: 18.69743,
// //         },

// //       ]
// //     }
    

// //     getDirections(data)
// //   }

// //   render() {
// //     console.log("lat",this.state.latitude)
   
   
// //    // console.log("dest", destination)
// //     return (
// //       <View style={styles.container}>
// //         <Button onPress={this.handleGetDirections} 
// //         title="Get Directions" />
// //       </View>
// //     );
// //   }
// // }
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //       //  backgroundColor: "#C3E4ED",

// //     },
// // })


// import React, { Component } from 'react';
// import { Dimensions, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = 'AIzaSyDN1hxa44LSQSWhv3O61wRuvSxbtmNW2qc';

// class TrackCustomerLocation extends Component {

//   constructor(props) {
//     super(props);

//     // AirBnB's Office, and Apple Park
//     this.state = {
//       coordinates: [
//         {
//           latitude: 37.3317876,
//           longitude: -122.0054812,
//         },
//         {
//           latitude: 37.771707,
//           longitude: -122.4053769,
//         },
//       ],
//     };

//     this.mapView = null;
//   }

//   onMapPress = (e) => {
//     this.setState({
//       coordinates: [
//         ...this.state.coordinates,
//         e.nativeEvent.coordinate,
//       ],
//     });
//   }

//   render() {
//     return (
//       <MapView
//         initialRegion={{
//           latitude: LATITUDE,
//           longitude: LONGITUDE,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         }}
//         style={StyleSheet.absoluteFill}
//         ref={c => this.mapView = c}
//         onPress={this.onMapPress}
//       >
//         {this.state.coordinates.map((coordinate, index) =>
//           <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
//         )}
//         {(this.state.coordinates.length >= 2) && (
//           <MapViewDirections
//             origin={this.state.coordinates[0]}
//             waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
//             destination={this.state.coordinates[this.state.coordinates.length-1]}
//             apikey={GOOGLE_MAPS_APIKEY}
//             strokeWidth={3}
//             strokeColor="hotpink"
//             optimizeWaypoints={true}
//             onStart={(params) => {
//               console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
//             }}
//             onReady={result => {
//               console.log(`Distance: ${result.distance} km`)
//               console.log(`Duration: ${result.duration} min.`)

//               this.mapView.fitToCoordinates(result.coordinates, {
//                 edgePadding: {
//                   right: (width / 20),
//                   bottom: (height / 20),
//                   left: (width / 20),
//                   top: (height / 20),
//                 }
//               });
//             }}
//             onError={(errorMessage) => {
//               // console.log('GOT AN ERROR');
//             }}
//           />
//         )}
//       </MapView>
//     );
//   }
// }

// export default TrackCustomerLocation;

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
