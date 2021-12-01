import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateDeck } from "../../utils/api/index";

function EditDeckForm({ fullDeck, history }) {
  const [name, setName] = useState(`${fullDeck.name}`);
  const [description, setDescription] = useState(`${fullDeck.description}`);
  const id = fullDeck.id;
  const deckId = useParams().deckId;

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck({ name, description, id });
    setName("");
    setDescription("");
    history.push(`/decks/${deckId}`);
  };

  return (
    <div>
      {/* <h1>{fullDeck.name}</h1> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <br />
          <input
            id="name"
            type="text"
            // placeholder={fullDeck.name}
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <br />
        <label htmlFor="description">
          Description
          <br />
          <textarea
            id="description"
            type="textarea"
            // placeholder={fullDeck.description}
            rows="4"
            cols="50"
            name="description"
            onChange={handleDescChange}
            value={description}
          ></textarea>
          <br />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => history.push(`/decks/${deckId}`)}
          >
            Cancel
          </button>{" "}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}

export default EditDeckForm;
