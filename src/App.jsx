import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Question from "./components/Question";
import OptionsCard from "./components/OptionsCard";

function App(props) {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("https://cx0kskzb1g.execute-api.us-east-1.amazonaws.com/dev/v1/facts")
      .then((res) => res.json())
      .then((data) => {
        const randomFact = data[Math.floor(Math.random() * data.length)];
        setFact(randomFact);
      });
  }, [setFact]);

  return (
    <>
      <Nav />
      {fact ? (
        <div className="main-container">
          <Question fact={fact} />
          <OptionsCard fact={fact} />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}

export default App;
