import { useState } from "react";

const useFactle = (facts) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); // each guess is an array
    const [history, setHistory] = useState([]); // each guess is a string
    const [correctPosition, setCorrectPosition] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    // Gets the facts text
    const textGen = (textArray) => textArray.map((text) => text.text);

    const formatGuess = () => {
        // Give each text option a property of color, use index as key
        const guessArray = currentGuess.split(',');
        let formattedGuess = guessArray.map((selectedFact, index) => {
            return { key: selectedFact, color: 'grey' };
        });

        const solutionArray = [];
        facts.map((fact) => {
            if (fact.correctPosition) {
                solutionArray.push(fact.text);
                return solutionArray.sort((a, b) => a.correctPosition - b.correctPosition, 0);
            }
        });

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
    const addNewGuess = () => {

    };

    const enterGuessHandler = (event, text, id) => {
        console.log('click enter');
        //only add guess if turn is less than 5
        if (turn > 5) {
            console.log('you used all your turns');
            return;
        }
        //Reject duplicate words
        if (history.includes(currentGuess)) {
            console.log('you already tried that word');
            return;
        }
        // check if guesses are up to 5
        if (currentGuess.split(',').length !== 5) {
            console.log('guesses must be five');
            return;
        }
        formatGuess();
    };

    const deleteGuess = () => {
        console.log("click delete");
        setCurrentGuess((prev) => {
            prev = prev.split(',').slice(0, -1);
            return prev.join(',');
        });
    };

    const clickHandler = (event, text, key, correctPosition) => {

        if (text) {
            setCurrentGuess((prev) => {
                console.log(prev);
                prev = prev + ',' + text;

                if (prev.split(',').length < 6) {
                    return prev.split(',').filter(element => element !== '').join(',');
                }

            });
        }
    };

    return { turn, currentGuess, guesses, isCorrect, clickHandler, deleteGuess, enterGuessHandler };
};

export default useFactle;