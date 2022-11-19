import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Factle from "./components/Factle";
import OptionsCard from "./components/OptionsCard";

function App(props) {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/christmasSongs")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        //console.log(data.options.map((items) => items.text));
        let factData = data.options.map((items) => items.text);
        // factData = factData.join(",");
        console.log(factData);
        setFact(factData);
      });
  }, [setFact]);

  return (
    <div>
      <Nav />
      <Card key={props.key} />
      <OptionsCard fact={fact} />
      {fact && <Factle fact={fact} />}
    </div>
  );
}

export default App;
