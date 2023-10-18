import React from 'react'

import DaysCounter from './components/DaysCounter'
import WinxBanner from './components/WinxBanner'

import './App.modules.scss';

function App() {
  return (
    <div className="App">
      <DaysCounter />
      <WinxBanner />
    </div>
  );
}

export default App;
