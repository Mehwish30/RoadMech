 
import React from 'react';
import Firstscreen from  './src/Firstscreen';
import AdminLogin from './src/Admin/AdminLogin';
import AdminSignup from './src/Admin/AdminSignup';
import AddSpareParts from './src/Admin/AddSpareParts'
import CustomerHome from './src/Customer/CustomerHome';
import Landing from './src/Landing'
import AdminHome from './src/Admin/AdminHome'
import MechanicHome from './src/Mechanic/MechanicHome'
import CustomerAboutUs from './src/Customer/CustomerAboutUs'
import MechanicAboutUs from './src/Mechanic/MechanicAboutUs'
import CustomerContactUs from './src/Customer/CustomerContactUs'
import MechanicContactUs from './src/Mechanic/MechanicContactUs'
import CustomerFeedback from './src/Customer/CustomerFeedback'
import Navigations from './src/navigation/Navigations'
import ViewContact from './src/Admin/ViewContact'
import ViewFeedback from './src/Admin/ViewFeedback';
import Mechanic from './src/Admin/Mechanic';
import Customer from './src/Admin/Customer';
import EditCustomer from './src/Admin/EditCustomer';
import EditMechanic from './src/Admin/EditMechanic';

const App=()=>{
  return(
     //< Firstscreen />
      // <AdminLogin />
    //<AdminSignup />
     // <AddSpareParts />
      //<CustomerHome />
       // <Landing />
         //<CustomerHome />
        // <AdminHome />
       //<MechanicHome />
        //<AboutUs />
       // <CustomerAboutUs />
      // <MechanicAboutUs />
      //<CustomerContactUs />
      //<MechanicContactUs />
     // <CustomerFeedback />
     <Navigations />
     //<ViewContact />
    // <ViewFeedback />
    //<Mechanic />
  // <Customer />
  // <EditCustomer />
  //<EditMechanic />

  )
}
  
export default App;
