import React from "react";
import { useState } from "react";

function Forms({
  handleSubmit,
  initialState,
  submitButtonLabel,
  cancelButtonLabel,
  handleClick,
}) {
  
  const [formValue, setFormValue] = useState(initialState);

  const handleChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ ...formValue });
    setFormValue({ front: "", back: "" });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="front">
          Front
          <br />
          <textarea
            id="front"
            type="textarea"
            placeholder={"Front side of card"}
            rows="2"
            cols="50"
            name="front"
            onChange={handleChange}
            value={formValue?.front}
          ></textarea>
        </label>
        <br />
        <label htmlFor="Back">
          Back
          <br />
          <textarea
            id="Back"
            type="textarea"
            placeholder={"Back side of card"}
            rows="2"
            cols="50"
            name="back"
            onChange={handleChange}
            value={formValue?.back}
          ></textarea>
          <br />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            {cancelButtonLabel}
          </button>{" "}
          <button type="submit" className="btn btn-primary">
            {submitButtonLabel}
          </button>
        </label>
      </form>
    </div>
  );
}

export default Forms;
