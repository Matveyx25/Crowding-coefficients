import logo from './logo.svg';
import './App.css';
import React from 'react';
import BottomSheet from './Components/BottomSheet';

function App() {
  const data = {
    page: 'station',
    data: [
      {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min'},
      {name: '3', type: 'trolleybus', occupancy: 'low', time_to_arrive: '15min'},
      {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min'}
    ]
  }
  return (
    <div className="App">
      <BottomSheet data={data.data} type={data.page}/>
    </div>
  );
}

export default App;
