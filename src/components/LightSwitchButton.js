// import React and useState() hook
import React, { useState } from "react";

function LightSwitchButton(props) {
  // const [light, setLight] = useState('off');
  // props passed down from App.js; replaces above
  // const {light, setLight} = props;
  const {light, switchLight} = props;

  // //handler --> moved to App.js
  // const handleClick = () => setLight(light === "on" ? "off":"on");
  // new handler
  const handleClick = () => switchLight();

  return(
    <button className="LightSwitchButton" onClick={handleClick}>
      {/* When the state is on */}
      {light === 'on' && <span><i>💡</i> I'm on!</span>}
      {/* When the state is off */}
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;