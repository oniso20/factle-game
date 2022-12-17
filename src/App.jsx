import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Question from "./components/Question";
import OptionsCard from "./components/OptionsCard";

function App(props) {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/dev/v1/facts")
      .then((res) => res.json())
      .then((data) => {
        const randomFact = data[Math.floor(Math.random() * data.length)];
        setFact(randomFact);
      });
  }, [setFact]);

  return (
    <>
      <Nav />
      <div className="main-container">
        <Question fact={fact} />
        <OptionsCard fact={fact} />
      </div>
    </>
  );
}

export default App;
