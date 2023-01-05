import { useEffect, useState } from "react";
import "./styles/styles.css";
import Nav from "./components/Nav";
import Question from "./components/Question";
import OptionsCard from "./components/OptionsCard";

function App(props) {
  const [fact, setFact] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    fetch("https://cx0kskzb1g.execute-api.us-east-1.amazonaws.com/dev/v1/facts")
      .then((res) => res.json())
      .then((data) => {
        const randomFact = data[Math.floor(Math.random() * data.length)];
        setFact(randomFact);
      });
  }, [setFact]);

  return (
    <div className={`${theme}-mode` ? "all" : "none"}>
      <Nav />
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      {fact ? (
        <div className="main-container">
          <Question fact={fact} theme={theme} />
          <OptionsCard fact={fact} theme={theme} />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default App;
