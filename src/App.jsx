import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Factle from "./components/Factle";
import OptionsCard from "./components/OptionsCard";

function App(props) {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/christmasSongs")
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
      <Card key={props.key} />
      <OptionsCard fact={fact} />
      {fact && <Factle fact={fact} />}
    </div>
  );
}

export default App;
