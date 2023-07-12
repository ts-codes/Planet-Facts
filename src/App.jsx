import { useState } from 'react';
import Navbar from './layout/Navbar';
import MainContent from './layout/MainContent';
import starsBg from '/assets/background-stars.svg';
import { data } from './PlanetData';

function App() {
  const [activePlanet, setActivePlanet] = useState(data[0]);
  return (
    <div
      className="flex flex-col min-h-screen font-sans App bg-theme_dark_bg min-w-screen"
      style={{ backgroundImage: `url(${starsBg})` }}
    >
      <Navbar setActivePlanet={setActivePlanet} activePlanet={activePlanet} />
      <MainContent activePlanet={activePlanet} />
    </div>
  );
}

export default App;
