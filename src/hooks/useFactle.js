import { useState } from "react";

const useFactle = (fact) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); // each guess is an array
    const [history, setHistory] = useState([]); // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        // Give each text option a property of color, use index as key

    };

    const addNewGuess = () => {

    };

    const clickHandler = (event) => {
        let input = event.target.innerText;
        // console.log(input);

        if (Object.values(fact).includes(input)) {
            return console.log(input);
        }

    };

    return { turn, currentGuess, guesses, isCorrect, clickHandler };
};

export default useFactle;