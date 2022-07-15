import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedTest, setChangedText] = useState();

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedTest && <Output>It's good to see you!</Output>}
      {changedTest && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
