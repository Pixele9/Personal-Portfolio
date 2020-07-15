import React from 'react';
import './Assets/css/output.css';

// import bg_decoration from './Assets/Imgs/BG-Decoration.svg';
import personal_logo from './Assets/Imgs/PersonalLogo_DarkBG.png';

import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className="main-bg">
        {/* <img src={ bg_decoration } alt="background decoration" className="absolute z-0"/> */}
        <Navbar className="z-20"></Navbar>
        <img src={ personal_logo } alt="personal logo decoration" className="absolute right-0 bottom-0"/>
      </div>
    </>
  );
}

export default App;
