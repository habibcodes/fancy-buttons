// import React and useState() hook
import React, { useState } from "react";

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);
  // add to array for every click the text inside span
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  };
  // handler
  const handleClick = () => {
    setRepetitions(repetitions + 1);
  };

  return(
    <button className="TextRepeaterButton" onClick={handleClick}>
      {/* <span>I like this text</span> */}
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;