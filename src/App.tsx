import React, { useEffect, useState } from 'react';
import './App.css';
import ActionTablet from './Components/ActionTablet';
import BottomBar from './Components/BottomBar';
import GalaxyComponent from './Components/GalaxyTablet/GalaxyTablet';
import NewsTablet from './Components/NewsTablet';
import PlayerTablet from './Components/PlayerTablet';
import TopBar from './Components/TopBar';
import { Galaxy } from './Models/Galaxy/Galaxy';

function App() {
  const [galaxy, setGalaxy] = useState(new Galaxy())
  
  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newGalaxy = new Galaxy();
    newGalaxy.initGalaxy()
    newGalaxy.addPlanets()
    newGalaxy.addShip()
    setGalaxy(newGalaxy)
    console.log(newGalaxy.sectors)
  }

  return (
    <div className="app">
        <TopBar/>
        <div className='main'>
          <PlayerTablet/>
          <GalaxyComponent
            galaxy={galaxy}
            setGalaxy={setGalaxy}
          />
          <ActionTablet/>
          <NewsTablet/>
        </div>
        <BottomBar/>
    </div>
    
  );
}

export default App;
