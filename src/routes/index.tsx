import React from 'react';

import { 
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom'

import SignIn from '../pages/Signin';
import Dashboard from '../pages/Dashboard';
import SaleForm from '../pages/SaleForm';

 const Routes: React.FC = () => {

   return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/saleform" component={SaleForm} />
      </Switch>
    </BrowserRouter>

   );
 };
export default Routes;