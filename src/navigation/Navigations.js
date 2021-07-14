import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../Landing';
import Firstscreen from '../Firstscreen';
import CustomerLogin from '../Customer/CustomerLogin'
import CustomerSignup from '../Customer/CustomerSignup'
import CustomerHome from '../Customer/CustomerHome'
import MechanicHome from '../Mechanic/MechanicHome';
import MechanicLogin from '../Mechanic/MechanicLogin'
import MechanicSignup from '../Mechanic/MechanicSignup'
import AdminSignup from '../Admin/AdminSignup';
import AdminLogin from '../Admin/AdminLogin';
import AdminHome from '../Admin/AdminHome';
import AddSpareParts from '../Admin/AddSpareParts';
import CustomerContactUs from '../Customer/CustomerContactUs';
import MechanicContactUs from '../Mechanic/MechanicContactUs';
import MechanicAboutUs from '../Mechanic/MechanicAboutUs';
import CustomerAboutUs from '../Customer/CustomerAboutUs';
import CustomerBuySpareParts from '../Customer/CustomerBuySpareParts';
import CustomerFeedback from '../Customer/CustomerFeedback'
import CustomerProfile from '../Customer/CustomerProfile';
import MechanicProfile from '../Mechanic/MechanicProfile';
import Mechanic from '../Admin/Mechanic';
import ViewFeedback from '../Admin/ViewFeedback';
import Customer from '../Admin/Customer';
import ViewContact from '../Admin/ViewContact';
import AdminProfile from '../Admin/AdminProfile';
import EditCustomer from '../Admin/EditCustomer';
import EditMechanic from '../Admin/EditMechanic';
import CallMechanicHome from '../Customer/CallMechanicHome';
import MechanicDetails from '../Customer/MechanicDetails';
import ViewRequestCustomer from '../Mechanic/ViewRequestCustomer';
import MechanicAddSpareParts from '../Mechanic/MechanicAddSpareParts';
import TrackCustomerLocation from '../Mechanic/TrackCustomerLocation';
import ViewCart from '../Customer/ViewCart';
import BuySpareParts from '../Customer/BuySpareParts';
import TrackMechanicLocation from '../Customer/TrackMechanicLocation';

const Navigations = () => {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing}
          options={{
            headerTitle: ""
            , headerStyle: {
              backgroundColor: '#C3E4ED',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: 700,
              fontSize: 39
            },
          }} />
        <Stack.Screen name="First" component={Firstscreen}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#C3E4ED',
            },
          }} />
        <Stack.Screen name="Customerlogin" component={CustomerLogin}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerSignup" component={CustomerSignup}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerHome" component={CustomerHome}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#C3E4ED',
            },
          }} />
        <Stack.Screen name="Mechaniclogin" component={MechanicLogin}
          options={{ title: '' }} />
        <Stack.Screen name="MechanicSignup" component={MechanicSignup}
          options={{ title: '' }} />
        <Stack.Screen name="MechanicHome" component={MechanicHome}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#C3E4ED',
            },
          }} />
        <Stack.Screen name="AdminSignup" component={AdminSignup}
          options={{ title: '' }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin}
          options={{ title: '' }} />
        <Stack.Screen name="AdminHome" component={AdminHome}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#C3E4ED',
            },
          }} />
        <Stack.Screen name="AddSpareParts" component={AddSpareParts}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerContactUs" component={CustomerContactUs}
          options={{ title: '' }} />
        <Stack.Screen name="MechanicContactUs" component={MechanicContactUs}
          options={{ title: '' }} />
        <Stack.Screen name="MechanicAboutUs" component={MechanicAboutUs}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerAboutUs" component={CustomerAboutUs}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerFeedback" component={CustomerFeedback}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerBuySpareParts" component={CustomerBuySpareParts}
          options={{ title: '' }} />
        <Stack.Screen name="CustomerProfile" component={CustomerProfile}
          options={{ title: '' , headerStyle: {
            backgroundColor: '#C3E4ED',
          },}} />
        <Stack.Screen name="MechanicProfile" component={MechanicProfile}
          options={{ title: '' , headerStyle: {
            backgroundColor: '#C3E4ED',
          },}} />
        <Stack.Screen name="Mechanic" component={Mechanic}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#293941',
            },
          }} />
        <Stack.Screen name="ViewFeedback" component={ViewFeedback}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#293941',
            }
          }} />
        <Stack.Screen name="Customer" component={Customer}
          options={{ title: '' }} />
        <Stack.Screen name="ViewContact" component={ViewContact}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#293941',
            }
          }} />
        <Stack.Screen name="AdminProfile" component={AdminProfile}
          options={{ title: '' }} />
        <Stack.Screen name="EditCustomer" component={EditCustomer}
          options={{ title: '' }} />
        <Stack.Screen name="EditMechanic" component={EditMechanic}
          options={{ title: '' }} />
        <Stack.Screen name="CallMechanicHome" component={CallMechanicHome}
          options={{ title: '' }} />
        <Stack.Screen name="MechanicDetails" component={MechanicDetails}
          options={{ title: '' , headerStyle: {
            backgroundColor: '#C3E4ED',
          },}} />
        <Stack.Screen name="ViewRequest" component={ViewRequestCustomer}
          options={{
            title: '', headerStyle: {
              backgroundColor: '#C3E4ED',
            },
          }} />
        <Stack.Screen name="MechanicAddSpareParts" component={MechanicAddSpareParts}
          options={{ title: '' }} />
           <Stack.Screen name="TrackCustomerLocation" component={TrackCustomerLocation}
          options={{ title: '' }} />
          <Stack.Screen name="ViewCart" component={ViewCart}
          options={{ title: '' }} />
          <Stack.Screen name="Checkout" component={BuySpareParts}
          options={{ title: '' }} />
           <Stack.Screen name="TrackMechanicLocation" component={TrackMechanicLocation}
          options={{ title: '' }} />












      </Stack.Navigator>


    </NavigationContainer>
  )
}

export default Navigations
