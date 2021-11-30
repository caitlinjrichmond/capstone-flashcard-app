import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { createDeck } from "../../utils/api/index";

function CreateDeckForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
    createDeck({ name, description });
    setName("");
    setDescription("");
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <br />
          <input
            id="name"
            type="text"
            placeholder="Deck Name"
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
            placeholder="Brief Description of the Deck"
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
            onClick={() => history.push("/")}
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

export default CreateDeckForm;
