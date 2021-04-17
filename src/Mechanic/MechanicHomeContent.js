import React from 'react';
import { StyleSheet, Text, View ,Button,Image,TouchableHighlight,TouchableOpacity,
       Dimensions,AppRegistry,TextInput,YellowBox,AppState,AsyncStorage,Alert} from 'react-native';
import {Content,Container,Header,Left,Right,Icon,Footer,Body,Card} from 'native-base';
//import RiderPickUp from './RiderPickUp';
///import {createStackNavigator} from 'react-navigation';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage'

//-----------------------------------------------------------------------------------//
/*
MAP COMPONENTS DEFINITION
*/
//-----------------------------------------------------------------------------------//

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//-----------------------------------------------------------------------------------//


export default class MechanicHomeContents extends React.Component {

  static CustomerPickUpName="";
  static CustomerDropUpName="";
  static CustomerPickUpLatitude;
  static CustomerPickUpLongitude;
  static CustomerDropUpLatitude;
  static CustomerDropUpLongitude;
  static CustomerID="";
  static name="";
  //static Lastname="";

  static D_RiderPickUpName="";
  static D_RiderDropUpName="";
  static D_RiderPickUpLatitude;
  static D_RiderPickUpLongitude;
  static D_RiderDropUpLatitude;
  static D_RiderDropUpLongitude;
  static D_CustomerID="";
  static D_name="";
  //static D_Lastname="";

  static RD_Distance;
  static RD_Price;

//------------CONSTRUCTOR--------------------  //
  constructor(props) {
     super(props);
     this.state = {
       region: {
             latitude: LATITUDE,
             longitude: LONGITUDE,
             latitudeDelta: LATITUDE_DELTA,
             longitudeDelta: LONGITUDE_DELTA,

       },
       isModalVisible : false,
       isModal2Visible:false,
       isStartTripButtonVisible:true,
       isStopTripButtonVisible:false,
       isMounted: false,
     };
     this.callFunc = this.callFunc.bind(this);
     
     
     
   }
   callFunc(){
    if(this.isModalVisible){
      this.setState({isModalVisible:false});
    }else{
      this.setState({isModalVisible:true});
    }
 }
//------------NAVIGATION OPTION--------------------//
 static navigationOptions=  {

      drawerIcon: ({ tintColor }) => (
        <Image
              source={require('../assets/logo.png')}
              style={{width:25,height:25}}
        />
      ),
  }
//-----------COMPONENTDIDMOUNT------------------//
  componentDidMount() {
    //this.isMounted = true;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }
          });
        },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );

     /* this.watchID = navigator.geolocation.watchPosition(
        (position )=> {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }
          });
        },
        //error
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },

      );*/



     

      //
      //desable the warnings in yellow box
      YellowBox.ignoreWarnings([
      'Encountered an error loading page',
      ]);
      console.disableYellowBox = true;

    }

    //---------------------------------------------
    //COMPONENT UPDATE
    //---------------------------------------------
     componentDidUpdate(prevState) {
        this._GetDriverRiderDistance(DriverHomeContents.iderDropUpLatitude,
        MechanicHomeContents.CustomerPickUpLongitude,
        MechanicHomeContents.CustomerDropUpLatitude,
        MechanicHomeContents.CustomerDropUpLongitude);

  // Typical usage (don't forget to compare props):
    if (this.state.region !== prevState.region)
    {

       // AppState.addEventListener('change',this.storeUserLocation());



    }
    }


    //----------------------------------------------
    //----------------------------------------------

    componentWillUnmount() {
    //  this.isMounted = false;
    //  if(!this.state.isMounted){
      navigator.geolocation.clearWatch(this.watchID);
    //  }

    }
    
    componentDidUpdate(prevState) {
        this._getCustomerAcceptDetails();
        //when a new request is added
        this._getCustomerRequestDetails();
        // Typical usage (don't forget to compare props):
        if (this.state.region !== prevState.region)
        {
    
           this.storeUserLocation();
    
    
    
        }
    }



//------------RENDER FUNCTION--------------------//

  render() {


    return (
      <Container>

       <Header style={{backgroundColor:'#42A5F5',height:75}}>
         <Left>
         <TouchableHighlight
               style={{width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:20}}
               onPress={() =>this.props.navigation.toggleDrawer()}
           >
          <Icon
               name="menu"
               style={{color:'#ffffff',}}
           / >
          </TouchableHighlight>
         </Left>
         <Body>
                <Text style={{color:'#ffffff',fontSize:20,fontWeight:'bold',marginTop:20}}>Driving</Text>
          </Body>
          <Right>
            
          
          
          </Right>
          

       </Header>

      <Content>

      <View style={{justifyContent:'center'}}>


      <MapView
                provider={PROVIDER_GOOGLE}
                style={ styles.map }
                showsUserLocation={ true }
                region={ this.state.region }
                showsUserLocation = {true}
                onRegionChange={ region => this.setState({region}) }
                onRegionChangeComplete={ region => this.setState({region}) }
      >
      <MapView.Marker
              coordinate={ this.state.region }
              pinColor="#E91E63"
              title={"Driver"}
      >
      <Text style={styles.driverTitle}>Me,Driver</Text>
      <Image  source={require('../assets/logo.png')} 
      
      
      style={{width:100,height:200}}  />
      
      </MapView.Marker>  
      </MapView>
     
      {this.state.isModalVisible ?
      
      <Card style={styles.MainAcceptView} >
        <View style={styles.RiderDetails}>
        <Image  source={require('../assets/logo.png')} style={{width:50,height:50,borderRadius:50,marginTop:20,marginLeft:7}}  />
        <Text style={{marginTop:20,fontSize:18,marginLeft:15,color:'#636e72',fontWeight:"bold"}}>{MechaniicHomeContents.name }</Text>
        </View>
        <View style={styles.riderLocationTitle}>
             <Text style={{fontSize:14,color:"#636e72"}}>pickup:</Text>
             <Text style={{fontSize:14,color:"#636e72"}}>dropoff:</Text>
        </View>
        <View style={styles.riderLocationValue}>
             <Text style={{fontSize:14,color:'#42A5F5'}}>{CustomerPickUpName}</Text>
             <Text style={{fontSize:14,color:'#42A5F5'}}>{CustomerDropUpName}</Text>
        </View>
        <View style={styles.riderPayments}>
        <Text style={{marginTop:20,fontSize:15,fontWeight:'bold'}}>CASH</Text>
        <Image  source={require('../assets/logo.png')} style={{width:20,height:20,borderRadius:10,marginTop:20,marginLeft:7}}  />
        </View>  
        <View style={styles.distancePriceView2}>
        <Text style={{fontWeight:'bold',fontSize:20}}>5KM</Text>
        <Text style={{fontWeight:'bold',fontSize:20,marginLeft:7}}>UGX 15,000</Text>
        </View>
        <View style={styles.AcceptDeclineView}>
                <TouchableOpacity
                  style={styles.AcceptButton}
                  onPress={this._AcceptRequest}
                  >
                  <Text style={{color:'#ffffff',fontWeight:'bold'}}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.DeclineButton}
                  onPress={this._DeclineRequest}
                  >
                  <Text style={{color:'#42A5F5',fontWeight:'bold'}}>Decline</Text>
                </TouchableOpacity>
        </View>  

       </Card>

       
       :null
      }
       

      {this.state.isModal2Visible ?
      
      <Card style={styles.MainAcceptView} >
        <View style={styles.RiderDetails}>
        <Image  source={require('../assets/logo.png')} style={{width:50,height:50,borderRadius:50,marginTop:20,marginLeft:7}}  />
        <Text style={{marginTop:20,fontSize:18,marginLeft:15,color:'#636e72',fontWeight:"bold"}}>{DriverHomeContents.D_Firstname +""+DriverHomeContents.D_Lastname}</Text>
        </View>
        <View style={styles.riderLocationTitle}>
             <Text style={{fontSize:14,color:"#636e72"}}>pickup:</Text>
             <Text style={{fontSize:14,color:"#636e72"}}>dropoff:</Text>
        </View>
        <View style={styles.riderLocationValue}>
             <Text style={{fontSize:14,color:'#42A5F5'}}>{D_CustomerPickUpName}</Text>
             <Text style={{fontSize:14,color:'#42A5F5'}}>{D_CustomerDropUpName}</Text>
        </View>
        <View style={styles.riderPayments}>
        <Text style={{marginTop:20,fontSize:15,fontWeight:'bold'}}>CASH</Text>
        <Image  source={require('../Images/cash.png')} style={{width:20,height:20,borderRadius:10,marginTop:20,marginLeft:7}}  />
        </View>  
        <View style={styles.distancePriceView}>
        <Text style={{fontWeight:'bold',fontSize:20}}>5KM</Text>
        <Text style={{fontWeight:'bold',fontSize:20,marginLeft:7}}>UGX 15,000</Text>
        </View>
        <View style={styles.AcceptDeclineView2}>
        {this.state.isStartTripButtonVisible ?
                <TouchableOpacity
                  style={styles.DirverButton}
                  onPress={this._StartTrip}
                  >
                  <Text style={{color:'#ffffff',fontWeight:'bold'}}>START TRIP</Text>
                </TouchableOpacity>
          :null
        }

        {this.state.isStopTripButtonVisible ?
                <TouchableOpacity
                  style={styles.DirverButton}
                  onPress={this._DoneTrip}
                  >
                  <Text style={{color:'#ffffff',fontWeight:'bold'}}>Done</Text>
                </TouchableOpacity>
          :null
        }         
                
        </View>  

       </Card>

       
       :null
      } 
      





      </View>

      </Content>
      
      </Container>
    );
  }
  _pickUpLocation = async () => {
  //this.props.navigation.navigate('pickUpLocation');
  //alert(this.state.region.latitude);

  };
  _StartTrip=async() =>{
    alert("start triping ");
    Alert.alert(
      'Trip Confirm',
      'Are you sure you want to drive',
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress:this._StartDriving},
      ],
      { cancelable: false }
      )
    
  }

  _StartDriving=async()=>{
      alert("ready to drive");
      
      this.setState({isStartTripButtonVisible:false});
      this.setState({isStopTripButtonVisible:true});
      AsyncStorage.getItem('driverId')
   .then(driverID => 
    //riderId=result,s
    
    database().ref('Customer_History/'+CustomerId+"/").set({
      CustomerId:CustomerId,

     }).then(()=>{

      
        
     },(error)=>{
    //  Toast.show(error.message,Toast.SHORT);
    console.log(error)
      
     }),

     
  
   )
   .catch(e => 
     
     
     console.log('err', e)
   
   );

   //store driver information
   AsyncStorage.getItem('driverId')
   .then(driverID => 
    //riderId=result,
    
    firebase.database().ref('Customer_History/'+CustomerId+"/").set({
      customer:CustomerId,
      customerpickname:customerPickUpName,
      customerdropname:CustomerDropUpName,
      customerpickuplatitude:CustomerPickUpLatitude,
      customerpickuplongitude:CustomerPickUpLongitude,
      customerDropofflatitude:CustomerDropUpLatitude,
      customerdropofflongitude:CustomerDropUpLongitude
      
     }).then(()=>{

      this.setState({isModal2Visible:false});
        
     },(error)=>{
      //Toast.show(error.message,Toast.SHORT);
      console.error("error:"+error)
     }),

     
  
   )
   .catch(e => 
     
     
     console.log('err', e)
   
   );



  }

  _DoneTrip=()=>{
    //alert("done trip")
  }


   toRad=(Value)=> 
    {
        return Value * Math.PI / 180;
    }
  _GetDriverRiderDistance=(lat1, lon1, lat2, lon2)=>{


        var R = 6371; // km
        var dLat = this.toRad(lat2-lat1);
        var dLon = this.toRad(lon2-lon1);
        var lat1 = this.toRad(lat1);
        var lat2 = this.toRad(lat2);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        console.log("the distance is:"+d);


  }
  
    storeUserLocation(){
    //var userLatitude=this.state.region.latitude;
    //var userLongitude=this.state.region.longitude;
    //if(userLatitude>0 && userLongitude>0){

      AsyncStorage.getItem('driverId')
      .then(result => 
        
        firebase.database().ref(`Drivers/${result}/DriversCurrentLocation/`).set({
          latitude:this.state.region.latitude,
          longitude: this.state.region.longitude
     
          }).then(()=>{
           //firebase.database().ref(`Payments/${RiderID}/PaymentsHistory`);
           //Toast.show("payments updated successfully",Toast.SHORT);
          // console.log("latitude:"+this.state.region.latitude +"   longitude:"+this.state.region.longitude);
     
          },(error)=>{
           //Toast.show(error.message,Toast.SHORT);
           console.log("error with location:"+error);
          })
        
          
      )
      .catch(e => 
        
        
        console.log('err', e)
      
      );
    

    /*RiderID=firebase.auth().currentUser.uid;
    if(RiderID){
    firebase.database().ref(`Drivers/${RiderID}/DriversCurrentLocation/`).set({
     latitude:this.state.region.latitude,
     longitude: this.state.region.longitude

     }).then(()=>{
      //firebase.database().ref(`Payments/${RiderID}/PaymentsHistory`);
      //Toast.show("payments updated successfully",Toast.SHORT);
      console.log("latitude:"+this.state.region.latitude +"   longitude:"+this.state.region.longitude);

     },(error)=>{
      //Toast.show(error.message,Toast.SHORT);
      console.log("error with location:"+error);
     });
    }


}*/
    }
    
  
    _getCustomerRequestDetails=()=>{
      AsyncStorage.getItem('CustomerId')
      .then(result => 
        
        firebase.database().ref('/Customer_Request/' +result).once('value').then(function(snapshot) {
          
          if(snapshot.exists()){
            CustomerId= snapshot.child("customerId").val();
            CustomerPickUpName=snapshot.child("pickUpName").val();
            CustomerDropUpName=snapshot.child("dropOffName").val();
            CustomerPickUpLatitude=snapshot.child("pickupLatitude").val();
            CustomerPickUpLongitude=snapshot.child("pickupLongitude").val();
            CustomerDropUpLatitude=snapshot.child("dropOffLatitude").val();
            CustomerDropUpLongitude=snapshot.child("dropOffLongitude").val();
          }
          
         
          
          }).then(()=>{
            console.log("fine"+CustomerDropUpName+""+CustomerPickUpName);
            if(!CustomerId==""){
              this.setState({isModalVisible:true});
            }
             
              database().ref('/Customers/' +CustomerId+'/Details').once('value').then(function(snapshot) {
                MechanicHomeContents.Firstname = snapshot.child('firstname').val();
               // DriverHomeContents.Lastname = snapshot.child('lastname').val();
                
                }).then(()=>{
                 //console.log("fine"+Firstname);
        
        
                },(error)=>{
                 // console.error("error"+error);
                 // console.log("the user id:"+userId);
                })
        
        
                },(error)=>{
                  console.error("error"+error);
                  //console.log("the user id:"+userId);
                })
        
          
      )
      .catch(e => 
        
        
        console.log('err', e)
      
      );

    }



    _getCustomerAcceptDetails=()=>{
      AsyncStorage.getItem('driverId')
      .then(result => 
        
        firebase.database().ref('/Customer_Confirm/' +result).once('value').then(function(snapshot) {
          
          if(snapshot.exists()){
            D_CustomerID= snapshot.child("CustomerId").val();
            D_RiderPickUpName=snapshot.child("riderpickname").val();
            D_RiderDropUpName=snapshot.child("riderdropname").val();
          }
          
         
          
          }).then(()=>{
          
            if(!D_CustomerID==""){
              this.setState({isModal2Visible:true});
            }
             
              firebase.database().ref('/Customer/' +D_CustomerID+'/Details').once('value').then(function(snapshot) {
                MechanicHomeContents.D_Firstname = snapshot.child('firstname').val();
              //  DriverHomeContents.D_Lastname = snapshot.child('lastname').val();
                
                }).then(()=>{
                 //console.log("fine"+Firstname);
        
        
                },(error)=>{
                 // console.error("error"+error);
                 // console.log("the user id:"+userId);
                })
        
        
                },(error)=>{
                  console.error("error"+error);
                  //console.log("the user id:"+userId);
                })
        
          
      )
      .catch(e => 
        
        
        console.log('err', e)
      
      );

    }

    _AcceptRequest=()=>{
      //alert("accept");

  //store rider informations
  AsyncStorage.getItem('driverId')
  .then(result => 
    firebase.database().ref('/Ride_Request/' +result).remove(),
    firebase.database().ref('/Ride_Request/' +RiderID).remove(),
    this.setState({isModalVisible:false})
      
  )
  .catch(e => 
    
    
    console.log('err', e)
  
  );
   AsyncStorage.getItem('driverId')
   .then(driverID => 
    //riderId=result,
    
    firebase.database().ref('Ride_Confirm/'+CustomerId).set({
      CustomerId:CustomerId,

     }).then(()=>{

      
        
     },(error)=>{
      //Toast.show(error.message,Toast.SHORT);
      console.log(error)
      
     }),

     
  
   )
   .catch(e => 
     
     
     console.log('err', e)
   
   );

   //store driver information
   AsyncStorage.getItem('MechanicId')
   .then(MechanicID => 
    //riderId=result,
    
    firebase.database().ref('Ride_Confirm/'+MechanicrID+"/").set({
      riderID:RiderID,
      riderpickname:RiderPickUpName,
      riderdropname:RiderDropUpName,
      riderpickuplatitude:RiderPickUpLatitude,
      riderpickuplongitude:RiderPickUpLongitude,
      riderDropofflatitude:RiderDropUpLatitude,
      riderdropofflongitude:RiderDropUpLongitude
      
     }).then(()=>{

      this.setState({isModalVisible:false});
        
     },(error)=>{
      //Toast.show(error.message,Toast.SHORT);
      console.error("error:"+error)
     }),

     
  
   )
   .catch(e => 
     
     
     console.log('err', e)
   
   );
  
   

      



    }
    _DeclineRequest=()=>{
      //alert("decline");
      
      AsyncStorage.getItem('driverId')
      .then(result => 
        firebase.database().ref('/Ride_Request/' +result).remove(),
        firebase.database().ref('/Ride_Request/' +RiderID).remove(),
        this.setState({isModalVisible:false})
          
      )
      .catch(e => 
        
        
        console.log('err', e)
      
      );
    

    }

}






//------------ STYLESHEET--------------------//
const styles=StyleSheet.create({
             containerView:{
               flex:1,
               backgroundColor:'#ffffff'
             },
             footer:{
               backgroundColor:'#ffffff',
               height:80
             },
             map: {
                flex:1,
                height: 600,
                marginTop:0,
              
             },
             MainAcceptView:{
               flexDirection:'row',
               backgroundColor:'white',
               width:350,
               height:180,
               position:"absolute",
               top:380,
               left:3,
               borderRadius:5,
               elevation:8
             },
             searchIcon:{
               color:'#42A5F5',
               marginTop:12,
               marginLeft:10
             },
             DropUpLocation:{
               alignSelf:'stretch',
               width:200,
               paddingBottom:2,
               marginTop:3,
               marginLeft:5,
               backgroundColor:'#fff',
             },
             DeclineButton:{
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#ffffff',
              height:50,
              width:155,
              borderColor:'#42A5F5',
              borderWidth:0.4,
              borderRadius:5,
              marginLeft:5
              
            },
           
              AcceptButton:{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#42A5F5',
                height:50,
                width:155,
                borderRadius:5,
                marginLeft:3
           },
           AcceptDeclineView:{
                flexDirection:'row',
                position:'absolute',
                left:10,
                top:110
           },
           AcceptDeclineView2:{
            flexDirection:'row',
            position:'absolute',
            left:10,
            top:110
           },
           RiderDetails:{
                flexDirection:'row',
                position:'absolute'
           },
           riderLocationTitle:{
             position:'absolute',
             top:50,
             left:70
           },
           riderLocationValue:{
            position:'absolute',
            top:50,
            left:120
          },
          riderPayments:{
            marginLeft:200,
            flexDirection:'row'
          },
          driverTitle:{
            position:'absolute',
            top:60,
            left:13,
            elevation:10,
            fontWeight:'bold',
            color:"cyan",
            fontSize:18
          },
          DirverButton:{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#42A5F5',
            height:50,
            width:320,
            borderRadius:5,
            marginLeft:3
         },
         distancePriceView:{
           position:'absolute',
           flexDirection:'row',
           marginTop:87,
           marginLeft:100
         },
         distancePriceView2:{
          position:'absolute',
          flexDirection:'row',
          marginTop:87,
          marginLeft:100
        }
});
AppRegistry.registerComponent('RiderHomeContents', () =>RiderHomeContents);
