import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,TouchableHighlight,KeyboardAvoidingView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-community/async-storage'
import database from '@react-native-firebase/database'
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlaRiderPickUpce = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
export default class CallMechanic extends React.Component {
  //=====================================================================================================================
  //to make these variblas class mebers and be accessible everywhere
  static pickupName;
  static pickupLatitude;
  static pickupLongitude;


  //====================================================================================================================
_validateLocation=()=>{
  // alert("good"+GooglePlacesInput.pickupLatitude);
   if(GooglePlacesInput.pickupName==null || GooglePlacesInput.pickupLatitude==null || GooglePlacesInput.pickupLongitude==null){
     alert("SET YOUR LOCATION PLEASE");
     return;
   }
  
   this._getNearbyMechanics();
 }
 //====================================================================================================================
//GET NEARBY DRIVERS 
  //====================================================================================================================
  _getNearbyMechanics=()=>{
     
    
    var MechanicKeys=[];
    var counts=[];
    var randomIndex;
    var urlRef =database().ref('/Mecahnic/');
    urlRef.once("value",(snapshot)=> {
    snapshot.forEach(function(child) {
    //console.log("keys"+child.key);
    MechanicKeys.push(child.key);
      
    });
    var i
    for(i=0;i<MechanicKeys.length;i++){
      counts.push(MechanicKeys[i]);
    }
    
    randomIndex=Math.floor(Math.random() * MechanicKeys.length);
    console.log(counts[randomIndex]);

    //request the driver

    this._requestMechanic(counts[randomIndex]);
    });

       

  }
  //=======================================================================================================================
  /* 
    REQUEST DRIVERS 
  */
    _requestMechanic=(MechanicID)=>{
      /*firebase.database().ref('/Ride_Request/' +driverID).once('value').then(function(snapshot) {
            
            if(snapshot.exists()){
              Toast.show("This driver is busy,Try another one",Toast.SHORT);
              return;
            }
            
           
            
            }).then(()=>{
              
            },(error)=>{
              console.error("error"+error);
              //console.log("the user id:"+userId);
            });
    */
      //store rider informations
       AsyncStorage.getItem('MechanicId')
       .then(MechanicID => 
        //riderId=result,
        
        database().ref('Service_Request/'+MechanicID).set({
          MechanicID:MechanicID
         }).then(()=>{
  
          alert(" requested successful");
            
         },(error)=>{
          alert(error);
          
         }),
  
         
      
       )
       .catch(e => 
         
         
         console.log('err', e)
       
       );
  
       //store driver information
       AsyncStorage.getItem('CustomerId')
       .then(CustomerID => 
        //riderId=result,
        
        database().ref('Service_Request/'+MechanicID+"/").set({
          CustomerID:CustomerID,
          pickUpName:GooglePlacesInput.pickupName,
          pickupLatitude:GooglePlacesInput.pickupLatitude,
          pickupLongitude:GooglePlacesInput.pickupLongitude,
          
         }).then(()=>{
  
          
            
         },(error)=>{
          //Toast.show(error.message,Toast.SHORT);
          console.error("error:"+error)
         }),
  
         
      
       )
       .catch(e => 
         
         
         console.log('err', e)
       
       );
       
  
  
  
    }
  


  


  //=====================================================================================================================
  render() {
    return (
      <View style={{flex:1}}>
      <Text style={{fontSize:22,fontWeight:'bold',marginTop:20}}>Locations</Text>
      <View style={{width:400,minHeight:120,maxHeight:120}}>
          <GooglePlacesInput />
          </View>
          <TouchableOpacity
                style={styles.bookButton}
                onPress={this._validateLocation}
                                      >
                <Text style={{color:'#ffffff',fontWeight:'bold'}}>REQUEST</Text>
         </TouchableOpacity>
 
      </View>
    )}
}


const styles=StyleSheet.create({
  containerView:{
    flex:1,
    backgroundColor:'#ffffff'
  },
  map: {
     height: 600,
     marginTop:0
  },
  searchIcon:{
    marginTop:8,
    marginLeft:8
  },
  bookButton:{
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#42A5F5',
   height:50,
   width:350,
   marginLeft:5
},




});

 
//===========================================================================================================================
const  GooglePlacesInput=  ()=>{

  return (
    <GooglePlacesAutocomplete
      placeholder='Location'
      minLength={2} 
      autoFocus={true}
      returnKeyType={'search'} 
      listViewDisplayed='auto'    
      fetchDetails={true}
      renderDescription={row => row.description} 
      onPress={(data, details = null) => { 
            console.log(data, details);
            //set pick up data from google auto complete
            pickupName= data.description, // selected address
            pickupLatitude= `${details.geometry.location.lat}`,
            pickupLongitude=`${details.geometry.location.lng}`,
            //storing data
            GooglePlacesInput.pickupLatitude= pickupLatitude,
            GooglePlacesInput.pickupName= pickupName,
            GooglePlacesInput.pickupLongitude= pickupLongitude
        
      }}
      
      getDefaultValue={() => ''}
      
      query={{
       
        key: 'AIzaSyANWRmdcfG4hksdtmVYxnqKCIsfW__rsVY',
        language: 'en', 
        types: 'geocode' 
      }}
      
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor:'#ffffff'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#ffffff',
          height:30
        }
      }}
      
      currentLocation={true} 
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' 
      GoogleReverseGeocodingQuery={{
        
      }}
      GooglePlacesSearchQuery={{
        
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      /*predefinedPlaces={[homePlace, workPlace]}*/

      debounce={200} 
      renderLeftButton={()  => <Image style={{width:25,height:25,marginTop:10,marginLeft:15}} source={require('../assets/logo.png')}/>}
      renderRightButton={() => <Text></Text>}
    />
  );

}
 