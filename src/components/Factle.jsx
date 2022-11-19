import React, { useEffect } from "react";
import useFactle from "../hooks/useFactle";

function Factle({ fact }) {
  const { currentGuess, clickHandler } = useFactle(fact);

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, [clickHandler]);

  return <div>Factle</div>;
}

export default Factle;
