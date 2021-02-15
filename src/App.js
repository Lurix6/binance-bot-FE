import './/Containers/LoginPage/Style.css'
import React from 'react'
import LoginPage from './Containers/LoginPage/Index'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Simulation from './Containers/Simulation/Index'
import Order from './Containers/Orders/Index'
import EmptyPage from './Containers/emptyPage/Index'


function App() {
  return (
    <BrowserRouter>
    <div className="RouteWrapper">
  <Switch>
    <Route path='/login' component={LoginPage} />
    <Route path='/simulation' component={Simulation} />
    <Route path='/orders' component={Order} />
    <Route path='/' component={EmptyPage} />
  </Switch>
  </div>
</BrowserRouter>
  );
}

export default App