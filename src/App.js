// import React and useState() hook
import React, { useState } from "react";
// component imports
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
// styling imports
import './App.css';

function App() {
  // state passed down from App.js to child LightSwitch as prop
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark': '';
  // brought in from LightSwitch
  const switchLight = () => setLight((light === "on") ? "off" : "on");

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        {/* <LightSwitchButton light={light} setLight={setLight} /> */}
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
