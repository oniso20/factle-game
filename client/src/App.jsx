import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Question from "./components/Question";
import OptionsCard from "./components/OptionsCard";
import EndModal from "./components/EndModal";

function App(props) {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/dev/v1/facts")
      .then((res) => res.json())
      .then((data) => {
        const randomFact = data[Math.floor(Math.random() * data.length)];
        console.log(randomFact);
        const factData = data.options;
        setFact(randomFact);
      });
  }, [setFact]);

  return (
    <>
      <div className="main-container">
        <Nav />
        <Question fact={fact} />
        <OptionsCard fact={fact} />
      </div>
    </>
  );
}

export default App;
