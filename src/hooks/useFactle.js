import { useState } from "react";

const useFactle = (facts) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [solution, setSolution] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        // Give each text option a property of color, use index as key
        const guessArray = currentGuess.split(',');
        let formattedGuess = guessArray.map((selectedFact, index) => {
            return { key: selectedFact, color: 'grey' };
        });

        const solutionArray = [];
        const solutionArrayData = facts.options
            .filter(option => option.correctPosition)
            .sort((a, b) => a.correctPosition - b.correctPosition);

        solutionArrayData.map((solution) => solutionArray.push(solution.text));

        formattedGuess.forEach((selectedFact, index) => {
            if (solutionArray[index] === selectedFact.key) {
                formattedGuess[index].color = 'green';
                solutionArray[index] = null;
            }
        });

        formattedGuess.forEach((selectedFact, index) => {
            if (solutionArray.includes(selectedFact.key) && selectedFact !== 'green') {
                formattedGuess[index].color = 'yellow';
                solutionArray[solutionArray.indexOf(selectedFact.key)] = null;
            }
        });
        return formattedGuess;
    };
    // add a new guess to the guesses state
    //update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {

        const solutionArray = [];
        const solutionArrayData = facts.options
            .filter(option => option.correctPosition)
            .sort((a, b) => a.correctPosition - b.correctPosition);

        solutionArrayData.map((soln) => solutionArray.push(soln.text));

        setSolution(solutionArray);

        if (solutionArray.join(',') === currentGuess) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            let newGuesses = prevGuesses;
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });

        setHistory((prevHistory) => {
            return prevHistory, currentGuess;
        });

        setTurn((prevTurn) => {
            return prevTurn + 1;
        });

        setUsedKeys(prevUsedKeys => {
            formattedGuess.forEach(guess => {
                const currentColor = prevUsedKeys[guess.key];

                if (guess.color === 'green') {
                    prevUsedKeys[guess.key] = 'green';
                    return;
                }
                if (guess.color === 'yellow' && currentColor !== 'green') {
                    prevUsedKeys[guess.key] = 'yellow';
                    return;
                }
                if (guess.color === 'grey' && currentColor !== ('green' || 'yellow')) {
                    prevUsedKeys[guess.key] = 'grey';
                    return;
                }
            });
            return prevUsedKeys;
        });

        setCurrentGuess('');
    };

    const enterGuessHandler = () => {
        //only add guess if turn is less than 5
        if (turn > 5) {
            return;
        }
        //Reject duplicate words
        if (history.includes(currentGuess)) {
            return;
        }
        // check if guesses are up to 5
        if (currentGuess.split(',').length !== 5) {
            return;
        }
        const formatted = formatGuess();
        addNewGuess(formatted);
    };

    const deleteGuess = () => {
        setCurrentGuess((prev) => {
            prev = prev.split(',').slice(0, -1);
            return prev.join(',');
        });
    };

    const clickHandler = (event, text) => {

        if (isCorrect || turn > 5) return;
        // Take only new cases per turn
        if (!currentGuess.split(',').includes(text)) {
            setCurrentGuess((prev) => {
                prev = prev + ',' + text;
                if (prev.split(',').length < 6) {
                    return prev.split(',').filter(element => element !== '').join(',');
                }
            });
        }
    };

    return { turn, currentGuess, guesses, isCorrect, solution, usedKeys, clickHandler, deleteGuess, enterGuessHandler };
};

export default useFactle;