import {Route, withRouter, BrowserRouter, Switch, Redirect, NavLink} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import BottomSheet from './Components/StationBottomSheet';
import { data, getAvalibleTransport, getTransport } from './store';
import TransportBottomSheet from './Components/TransportBottomSheet';
import StationBottomSheet from "./Components/StationBottomSheet";

function App() {
  const data = {
    page: 'station',
    data: [
        {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min', id: 1},
        {name: '3', type: 'trolleybus', occupancy: 'low', time_to_arrive: '15min', id: 2},
        {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min', id: 3},
        {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min', id: 4},
        {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min', id: 5},
    ]
}

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
              <Route exact path='/' render={() => <StationBottomSheet data={data.data}/>}/>
              <Route path='/:transportId?' render={() => <TransportBottomSheet data={data.data[1]}/>}/>
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
