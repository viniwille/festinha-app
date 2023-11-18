import React from 'react'
import { Analytics } from '@vercel/analytics/react'

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
      <Analytics />
    </div>
  );
}

export default App;
