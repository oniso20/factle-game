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
        console.log(factData);
        setFact(factData);
      });
  }, [setFact]);

  return (
    <div className="main-container">
      <Nav />
      <Question />
      <OptionsCard fact={fact} />
    </div>
  );
}

export default App;
