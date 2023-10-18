import React from 'react'

import DaysCounter from './components/DaysCounter'
import WinxBanner from './components/WinxBanner'
import SpotifyPlayer from './components/SpotifyPlayer'

import './App.modules.scss';

function App() {
  return (
    <div className="App">
      <DaysCounter />
      <WinxBanner />
      <SpotifyPlayer />
    </div>
  );
}

export default App;
