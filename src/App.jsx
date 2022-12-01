import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Question from "./components/Question";
import OptionsCard from "./components/OptionsCard";

function App(props) {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/christmasSongs")
      .then((res) => res.json())
      .then((data) => {
        const factData = data.options;
        setFact(factData);
      });
  }, [setFact]);

  return (
    <>
      <Nav />
      <div className="main-container">
        <Question />
        <OptionsCard fact={fact} />
      </div>
    </>
  );
}

export default App;
