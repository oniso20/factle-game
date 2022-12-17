    options = [
      {
        "id": 1,
        "text": "Blue Christmas (Elvis Presley)"
      },
      {
        "id": 2,
        "text": "All I want for Christmas is You (Mariah Carey)",
        "correctPosition": 1 
      },
      {
        "id": 3,
        "text": "Christmas was all fun last year (Micheal Jackson)",
        "correctPosition": 2 
      },
      {
        "id": 4,
        "text": "Let's read about christmas (James Bond)",
        "correctPosition": 3 
      },
      {
        "id": 5,
        "text": "Christmas is spain and Italy (World cup)",
        "correctPosition": 4 
      },
      {
        "id": 6,
        "text": "The fun just started at Christmas (Blue Man)",
        "correctPosition": 5 
      },
      {
        "id": 7,
        "text": "Not another white christmas (Mary White)" 
      },
      {
        "id": 8,
        "text": "Nothing to do on christmas morning (Nomady John)"
      }
    ]

    const currentGuess = "Christmas is spain and Italy (World cup),Christmas was all fun last year (Micheal Jackson),Not another white christmas (Mary White),Nothing to do on christmas morning (Nomady John),Blue Christmas (Elvis Presley)"

    const guessArray = currentGuess.split(',')
    let formattedGuess = guessArray.map((selectedFact, index) => {
        return {key: selectedFact, color: 'grey'}
        })
    

    const solutionArray = []
    options.map((fact) => {
        if (fact.correctPosition) {
            solutionArray.push(fact.text)
           return solutionArray.sort((a, b) => a.correctPosition - b.correctPosition, 0)
        }
    })
    console.log(solutionArray)

    formattedGuess.forEach((selectedFact, index) => {
        if (solutionArray[index] === selectedFact.key) {
            formattedGuess[index].color = 'green'
            solutionArray[index] = null
        }
    })

    formattedGuess.forEach((selectedFact, index) => {
        if (solutionArray.includes(selectedFact.key) && selectedFact !== 'green') {
            formattedGuess[index].color = 'yellow'
            solutionArray[solutionArray.indexOf(selectedFact.key)] = null
        }
    })

    return formattedGuess


//console.log(options)

//Big O(n^2)
// options.map(fact => {
//     if(fact.correctPosition) {
//         a.map((guess, idx) => {
//             if(fact.text.includes(guess)) {
//                 console.log(fact.text, fact.correctPosition, idx+1)
//             if(idx+1 === fact.correctPosition) {
//                 console.log('green')
//             } else {
//                 console.log('yellow')
//             }
//             }
//         })
//     }
// })



