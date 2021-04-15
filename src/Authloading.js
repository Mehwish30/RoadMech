import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default class AuthLoading extends React.Component {
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    
    }
    
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken2 = await AsyncStorage.getItem('AdminId');
      const userToken1= await AsyncStorage.getItem('MechanicId');
      const userToken3= await AsyncStorage.getItem('CustomerId');
      

  
      
      var token;
      if(userToken1){
      AsyncStorage.getItem('MechanicId')
        .then(result => 
          token=result,
          this.props.navigation.navigate(userToken1 ?'MechanicHome':'First')
          
        
        )
        .catch(e => 
          
         console.log('err', e)
        
        );
      }else if (userToken2){
        AsyncStorage.getItem('driverId')
        .then(result => 
          token=result,
          this.props.navigation.navigate(userToken2 ?'AdminHome':'First')
           
        )
        console.log(userToken2)
        .catch(e => 
          
         console.log('err', e)
        
        );  
      }  
      else  {
        AsyncStorage.getItem('CustomerId')
        .then(result => 
          token=result,
          this.props.navigation.navigate(userToken2 ?'CustomerHome':'First')
           
        )
        .catch(e => 
          
         console.log('err', e)
        
        );  
      } 
        
      //this.props.navigation.navigate(userToken ?'App2':'Auth');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={{backgroundColor:'red'}}>
          <ActivityIndicator size="large"/>
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
  