import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigation, RoutingSwitch } from './components/Navigation';

// Main stylings
import './styles/App.scss';
import './styles/main.scss';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <RoutingSwitch />
      </div>
    </BrowserRouter>
  );
}
