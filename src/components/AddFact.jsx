import React, { useState } from "react";
import axios from "axios";

const AddFact = () => {
  const [fact, setFact] = useState({
    source: "",
    prompt: "",
    options: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFact({ ...fact, [name]: value });
  };

  const handleOptionChange = (event, index) => {
    const { name, value } = event.target;
    const newOptions = [...fact.options];
    newOptions[index][name] = value;
    setFact({ ...fact, options: newOptions });
  };

  const handleAddOption = () => {
    setFact({
      ...fact,
      options: [
        ...fact.options,
        { id: fact.options.length + 1, text: "", correctPosition: "" },
      ],
    });
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...fact.options];
    newOptions.splice(index, 1);
    setFact({ ...fact, options: newOptions });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const optionsWithCorrectPosition = fact.options.filter(
      (option) => option.correctPosition
    );
    const factWithFilteredOptions = {
      ...fact,
      options: optionsWithCorrectPosition,
    };
    if (
      factWithFilteredOptions.options.some(
        (option) => option.correctPosition < 1 || option.correctPosition > 5
      )
    ) {
      alert("Correct position must be a number between 1 and 5");
    } else {
      axios
        .post(
          "https://cx0kskzb1g.execute-api.us-east-1.amazonaws.com/dev/v1/facts",
          factWithFilteredOptions
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="source">Source:</label>
      <input
        type="text"
        id="source"
        name="source"
        value={fact.source}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="prompt">Prompt:</label>
      <input
        type="text"
        id="prompt"
        name="prompt"
        value={fact.prompt}
        onChange={handleChange}
      />
      <br />
      {fact.options.map((option, index) => (
        <div key={option.id}>
          <label htmlFor={`option-${option.id}`}>Option {option.id}:</label>
          <input
            type="text"
            id={`option-${option.id}`}
            name="text"
            value={option.text}
            onChange={(event) => handleOptionChange(event, index)}
          />
          <label htmlFor={`correct-position-${option.id}`}>
            Correct position:
          </label>
          <input
            type="number"
            id={`correct-position-${option.id}`}
            name="correctPosition"
            value={option.correctPosition}
            onChange={(event) => handleOptionChange(event, index)}
            pattern="[1-5]"
          />

          <button type="button" onClick={() => handleRemoveOption(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddOption}>
        Add Option
      </button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFact;
