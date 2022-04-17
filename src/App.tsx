import React from 'react';
import './App.css'; 
import ProfileContainer from './container/ProfileContainer';
import ReactGA from "react-ga4";

function App() {
  const GA4_MEASUREMENT_ID = "G-8GLG942CEP";
  ReactGA.initialize(GA4_MEASUREMENT_ID);
  ReactGA.send("pageview"); 

  return (
    <> 
      <ProfileContainer />
    </>
  );
}

export default App;