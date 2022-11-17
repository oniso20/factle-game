import { useEffect, useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/christmasSongs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // need a random number between 0 and factData.length
        const factData = data.options;
        const randomFact = Math.floor(Math.random() * factData.length);
        setFact(factData[randomFact].id);
      });
  }, [setFact]);

  return (
    <div>
      <Nav />
      {fact && <div>The fact is: {fact}</div>}
    </div>
  );
}

export default App;
