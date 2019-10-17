import React, { useState } from 'react';
import MyAppBar from './components/my-app-bar/MyAppBar';
import Drawer from './components/drawer/Drawer';
import Convert from './components/convert/Convert';
import './App.css';

function App() {
  const [drawer, setDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer({ ...drawer, [side]: open });
  };
  return (
    <div className="App">
      <MyAppBar toggleDrawer={toggleDrawer} />
      <Drawer toggle={toggleDrawer} {...drawer} />
      <Convert />
    </div>
  );
}

export default App;
