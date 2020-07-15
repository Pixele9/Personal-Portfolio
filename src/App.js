import React from 'react';
import './Assets/css/output.css';

import Navbar from './Components/Navbar';
import HomePage from './Screens/HomePage';

function App() {
  return (
    <>
      <div className="flex flex-row main-bg">
        <Navbar />
        <div className="main-content">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
