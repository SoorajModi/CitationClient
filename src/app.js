import React from 'react';
import Router from './router';
import { Navbar } from './components';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
