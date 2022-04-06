import React from 'react';
import Router from './router';
import { Footer, Navbar } from './components';

function App() {
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div className="pb-80">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
