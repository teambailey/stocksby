import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigation, RoutingSwitch } from './components/Navigation';

// Main stylings
import './styles/main.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <RoutingSwitch />
      </div>
    </BrowserRouter>
  );
}
